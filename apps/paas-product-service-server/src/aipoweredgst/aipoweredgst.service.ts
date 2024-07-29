import { Injectable } from "@nestjs/common";
import { GstCalculationInput } from "../aiPoweredGst/GstCalculationInput";
import { GstCalculationResult } from "../aiPoweredGst/GstCalculationResult";

@Injectable()
export class AiPoweredGstService {
  constructor() {}
  async CalculateGst(args: GstCalculationInput): Promise<GstCalculationResult> {
    throw new Error("Not implemented");
  }
}
