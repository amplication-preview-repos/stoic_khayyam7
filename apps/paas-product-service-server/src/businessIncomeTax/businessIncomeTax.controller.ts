import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { BusinessIncomeTaxService } from "./businessIncomeTax.service";
import { BusinessIncomeTaxControllerBase } from "./base/businessIncomeTax.controller.base";

@swagger.ApiTags("businessIncomeTaxes")
@common.Controller("businessIncomeTaxes")
export class BusinessIncomeTaxController extends BusinessIncomeTaxControllerBase {
  constructor(protected readonly service: BusinessIncomeTaxService) {
    super(service);
  }
}
