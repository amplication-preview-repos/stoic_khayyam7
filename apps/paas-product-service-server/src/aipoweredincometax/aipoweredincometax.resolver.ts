import * as graphql from "@nestjs/graphql";
import { IncomeTaxCalculationInput } from "../aiPoweredIncomeTax/IncomeTaxCalculationInput";
import { IncomeTaxCalculationResult } from "../aiPoweredIncomeTax/IncomeTaxCalculationResult";
import { AiPoweredIncomeTaxService } from "./aipoweredincometax.service";

export class AiPoweredIncomeTaxResolver {
  constructor(protected readonly service: AiPoweredIncomeTaxService) {}

  @graphql.Mutation(() => IncomeTaxCalculationResult)
  async CalculateIncomeTax(
    @graphql.Args()
    args: IncomeTaxCalculationInput
  ): Promise<IncomeTaxCalculationResult> {
    return this.service.CalculateIncomeTax(args);
  }
}
