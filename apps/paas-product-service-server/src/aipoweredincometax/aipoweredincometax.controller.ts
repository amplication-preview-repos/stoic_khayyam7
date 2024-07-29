import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { AiPoweredIncomeTaxService } from "./aipoweredincometax.service";
import { IncomeTaxCalculationInput } from "../aiPoweredIncomeTax/IncomeTaxCalculationInput";
import { IncomeTaxCalculationResult } from "../aiPoweredIncomeTax/IncomeTaxCalculationResult";

@swagger.ApiTags("aiPoweredIncomeTaxes")
@common.Controller("aiPoweredIncomeTaxes")
export class AiPoweredIncomeTaxController {
  constructor(protected readonly service: AiPoweredIncomeTaxService) {}

  @common.Post("/calculateIncomeTax")
  @swagger.ApiOkResponse({
    type: IncomeTaxCalculationResult
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CalculateIncomeTax(
    @common.Body()
    body: IncomeTaxCalculationInput
  ): Promise<IncomeTaxCalculationResult> {
        return this.service.CalculateIncomeTax(body);
      }
}
