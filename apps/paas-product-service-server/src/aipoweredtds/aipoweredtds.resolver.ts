import * as graphql from "@nestjs/graphql";
import { TdsCalculationInput } from "../aiPoweredTds/TdsCalculationInput";
import { TdsCalculationResult } from "../aiPoweredTds/TdsCalculationResult";
import { AiPoweredTdsService } from "./aipoweredtds.service";

export class AiPoweredTdsResolver {
  constructor(protected readonly service: AiPoweredTdsService) {}

  @graphql.Mutation(() => TdsCalculationResult)
  async CalculateTds(
    @graphql.Args()
    args: TdsCalculationInput
  ): Promise<TdsCalculationResult> {
    return this.service.CalculateTds(args);
  }
}
