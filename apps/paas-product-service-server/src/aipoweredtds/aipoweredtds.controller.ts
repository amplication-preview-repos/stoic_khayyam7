import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { AiPoweredTdsService } from "./aipoweredtds.service";
import { TdsCalculationInput } from "../aiPoweredTds/TdsCalculationInput";
import { TdsCalculationResult } from "../aiPoweredTds/TdsCalculationResult";

@swagger.ApiTags("aiPoweredTds")
@common.Controller("aiPoweredTds")
export class AiPoweredTdsController {
  constructor(protected readonly service: AiPoweredTdsService) {}

  @common.Post("/calculateTDS")
  @swagger.ApiOkResponse({
    type: TdsCalculationResult
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CalculateTds(
    @common.Body()
    body: TdsCalculationInput
  ): Promise<TdsCalculationResult> {
        return this.service.CalculateTds(body);
      }
}
