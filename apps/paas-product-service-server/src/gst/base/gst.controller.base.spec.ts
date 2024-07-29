import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { GstController } from "../gst.controller";
import { GstService } from "../gst.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  annualTurnover: 42.42,
  createdAt: new Date(),
  financialYear: new Date(),
  gstNumber: "exampleGstNumber",
  id: "exampleId",
  taxPaid: 42.42,
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  annualTurnover: 42.42,
  createdAt: new Date(),
  financialYear: new Date(),
  gstNumber: "exampleGstNumber",
  id: "exampleId",
  taxPaid: 42.42,
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    annualTurnover: 42.42,
    createdAt: new Date(),
    financialYear: new Date(),
    gstNumber: "exampleGstNumber",
    id: "exampleId",
    taxPaid: 42.42,
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  annualTurnover: 42.42,
  createdAt: new Date(),
  financialYear: new Date(),
  gstNumber: "exampleGstNumber",
  id: "exampleId",
  taxPaid: 42.42,
  updatedAt: new Date(),
};

const service = {
  createGst() {
    return CREATE_RESULT;
  },
  gsts: () => FIND_MANY_RESULT,
  gst: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("Gst", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: GstService,
          useValue: service,
        },
      ],
      controllers: [GstController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /gsts", async () => {
    await request(app.getHttpServer())
      .post("/gsts")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        financialYear: CREATE_RESULT.financialYear.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /gsts", async () => {
    await request(app.getHttpServer())
      .get("/gsts")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          financialYear: FIND_MANY_RESULT[0].financialYear.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /gsts/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/gsts"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /gsts/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/gsts"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        financialYear: FIND_ONE_RESULT.financialYear.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /gsts existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/gsts")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        financialYear: CREATE_RESULT.financialYear.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/gsts")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
