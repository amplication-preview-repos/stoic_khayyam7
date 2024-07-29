import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { LegalComplianceService } from "./legalCompliance.service";
import { LegalComplianceControllerBase } from "./base/legalCompliance.controller.base";

@swagger.ApiTags("legalCompliances")
@common.Controller("legalCompliances")
export class LegalComplianceController extends LegalComplianceControllerBase {
  constructor(protected readonly service: LegalComplianceService) {
    super(service);
  }
}
