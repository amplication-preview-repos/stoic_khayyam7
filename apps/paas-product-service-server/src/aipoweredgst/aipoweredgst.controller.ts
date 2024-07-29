import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { AiPoweredGstService } from "./aipoweredgst.service";
import { GstCalculationInput } from "../aiPoweredGst/GstCalculationInput";
import { GstCalculationResult } from "../aiPoweredGst/GstCalculationResult";

@swagger.ApiTags("aiPoweredGsts")
@common.Controller("aiPoweredGsts")
export class AiPoweredGstController {
  constructor(protected readonly service: AiPoweredGstService) {}

  @common.Post("/calculateGST")
  @swagger.ApiOkResponse({
    type: GstCalculationResult
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CalculateGst(
    @common.Body()
    body: GstCalculationInput
  ): Promise<GstCalculationResult> {
        return this.service.CalculateGst(body);
      }
}
