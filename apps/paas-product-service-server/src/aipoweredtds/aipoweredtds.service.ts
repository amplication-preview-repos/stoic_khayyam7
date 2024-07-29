import { Injectable } from "@nestjs/common";
import { TdsCalculationInput } from "../aiPoweredTds/TdsCalculationInput";
import { TdsCalculationResult } from "../aiPoweredTds/TdsCalculationResult";

@Injectable()
export class AiPoweredTdsService {
  constructor() {}
  async CalculateTds(args: TdsCalculationInput): Promise<TdsCalculationResult> {
    throw new Error("Not implemented");
  }
}
