import { Module } from "@nestjs/common";
import { AiPoweredIncomeTaxService } from "./aipoweredincometax.service";
import { AiPoweredIncomeTaxController } from "./aipoweredincometax.controller";
import { AiPoweredIncomeTaxResolver } from "./aipoweredincometax.resolver";

@Module({
  controllers: [AiPoweredIncomeTaxController],
  providers: [AiPoweredIncomeTaxService, AiPoweredIncomeTaxResolver],
  exports: [AiPoweredIncomeTaxService],
})
export class AiPoweredIncomeTaxModule {}
