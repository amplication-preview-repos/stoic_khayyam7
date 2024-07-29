import * as graphql from "@nestjs/graphql";
import { GstCalculationInput } from "../aiPoweredGst/GstCalculationInput";
import { GstCalculationResult } from "../aiPoweredGst/GstCalculationResult";
import { AiPoweredGstService } from "./aipoweredgst.service";

export class AiPoweredGstResolver {
  constructor(protected readonly service: AiPoweredGstService) {}

  @graphql.Mutation(() => GstCalculationResult)
  async CalculateGst(
    @graphql.Args()
    args: GstCalculationInput
  ): Promise<GstCalculationResult> {
    return this.service.CalculateGst(args);
  }
}
