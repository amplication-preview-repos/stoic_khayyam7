import { Module } from "@nestjs/common";
import { BusinessIncomeTaxModuleBase } from "./base/businessIncomeTax.module.base";
import { BusinessIncomeTaxService } from "./businessIncomeTax.service";
import { BusinessIncomeTaxController } from "./businessIncomeTax.controller";
import { BusinessIncomeTaxResolver } from "./businessIncomeTax.resolver";

@Module({
  imports: [BusinessIncomeTaxModuleBase],
  controllers: [BusinessIncomeTaxController],
  providers: [BusinessIncomeTaxService, BusinessIncomeTaxResolver],
  exports: [BusinessIncomeTaxService],
})
export class BusinessIncomeTaxModule {}
