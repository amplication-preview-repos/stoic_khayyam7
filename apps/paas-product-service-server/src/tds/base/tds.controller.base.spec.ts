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
import { TdsController } from "../tds.controller";
import { TdsService } from "../tds.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  annualTurnover: 42.42,
  createdAt: new Date(),
  financialYear: new Date(),
  id: "exampleId",
  taxDeducted: 42.42,
  tdsCertificateNumber: "exampleTdsCertificateNumber",
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  annualTurnover: 42.42,
  createdAt: new Date(),
  financialYear: new Date(),
  id: "exampleId",
  taxDeducted: 42.42,
  tdsCertificateNumber: "exampleTdsCertificateNumber",
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    annualTurnover: 42.42,
    createdAt: new Date(),
    financialYear: new Date(),
    id: "exampleId",
    taxDeducted: 42.42,
    tdsCertificateNumber: "exampleTdsCertificateNumber",
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  annualTurnover: 42.42,
  createdAt: new Date(),
  financialYear: new Date(),
  id: "exampleId",
  taxDeducted: 42.42,
  tdsCertificateNumber: "exampleTdsCertificateNumber",
  updatedAt: new Date(),
};

const service = {
  createTds() {
    return CREATE_RESULT;
  },
  tdsItems: () => FIND_MANY_RESULT,
  tds: ({ where }: { where: { id: string } }) => {
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

describe("Tds", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: TdsService,
          useValue: service,
        },
      ],
      controllers: [TdsController],
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

  test("POST /tds", async () => {
    await request(app.getHttpServer())
      .post("/tds")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        financialYear: CREATE_RESULT.financialYear.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /tds", async () => {
    await request(app.getHttpServer())
      .get("/tds")
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

  test("GET /tds/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/tds"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /tds/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/tds"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        financialYear: FIND_ONE_RESULT.financialYear.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /tds existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/tds")
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
          .post("/tds")
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
