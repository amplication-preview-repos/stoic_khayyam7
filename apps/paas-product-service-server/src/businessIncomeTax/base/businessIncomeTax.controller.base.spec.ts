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
import { BusinessIncomeTaxController } from "../businessIncomeTax.controller";
import { BusinessIncomeTaxService } from "../businessIncomeTax.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  annualIncome: 42.42,
  businessName: "exampleBusinessName",
  businessType: "exampleBusinessType",
  createdAt: new Date(),
  financialYear: new Date(),
  id: "exampleId",
  taxPaid: 42.42,
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  annualIncome: 42.42,
  businessName: "exampleBusinessName",
  businessType: "exampleBusinessType",
  createdAt: new Date(),
  financialYear: new Date(),
  id: "exampleId",
  taxPaid: 42.42,
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    annualIncome: 42.42,
    businessName: "exampleBusinessName",
    businessType: "exampleBusinessType",
    createdAt: new Date(),
    financialYear: new Date(),
    id: "exampleId",
    taxPaid: 42.42,
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  annualIncome: 42.42,
  businessName: "exampleBusinessName",
  businessType: "exampleBusinessType",
  createdAt: new Date(),
  financialYear: new Date(),
  id: "exampleId",
  taxPaid: 42.42,
  updatedAt: new Date(),
};

const service = {
  createBusinessIncomeTax() {
    return CREATE_RESULT;
  },
  businessIncomeTaxes: () => FIND_MANY_RESULT,
  businessIncomeTax: ({ where }: { where: { id: string } }) => {
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

describe("BusinessIncomeTax", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: BusinessIncomeTaxService,
          useValue: service,
        },
      ],
      controllers: [BusinessIncomeTaxController],
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

  test("POST /businessIncomeTaxes", async () => {
    await request(app.getHttpServer())
      .post("/businessIncomeTaxes")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        financialYear: CREATE_RESULT.financialYear.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /businessIncomeTaxes", async () => {
    await request(app.getHttpServer())
      .get("/businessIncomeTaxes")
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

  test("GET /businessIncomeTaxes/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/businessIncomeTaxes"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /businessIncomeTaxes/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/businessIncomeTaxes"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        financialYear: FIND_ONE_RESULT.financialYear.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /businessIncomeTaxes existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/businessIncomeTaxes")
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
          .post("/businessIncomeTaxes")
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
