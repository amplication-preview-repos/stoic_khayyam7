import { Injectable } from "@nestjs/common";
import { IncomeTaxCalculationInput } from "../aiPoweredIncomeTax/IncomeTaxCalculationInput";
import { IncomeTaxCalculationResult } from "../aiPoweredIncomeTax/IncomeTaxCalculationResult";

@Injectable()
export class AiPoweredIncomeTaxService {
  constructor() {}
  async CalculateIncomeTax(args: IncomeTaxCalculationInput): Promise<IncomeTaxCalculationResult> {
    throw new Error("Not implemented");
  }
}
