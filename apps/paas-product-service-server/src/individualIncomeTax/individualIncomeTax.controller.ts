import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { IndividualIncomeTaxService } from "./individualIncomeTax.service";
import { IndividualIncomeTaxControllerBase } from "./base/individualIncomeTax.controller.base";

@swagger.ApiTags("individualIncomeTaxes")
@common.Controller("individualIncomeTaxes")
export class IndividualIncomeTaxController extends IndividualIncomeTaxControllerBase {
  constructor(protected readonly service: IndividualIncomeTaxService) {
    super(service);
  }
}
