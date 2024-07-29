import { Module } from "@nestjs/common";
import { IndividualIncomeTaxModuleBase } from "./base/individualIncomeTax.module.base";
import { IndividualIncomeTaxService } from "./individualIncomeTax.service";
import { IndividualIncomeTaxController } from "./individualIncomeTax.controller";
import { IndividualIncomeTaxResolver } from "./individualIncomeTax.resolver";

@Module({
  imports: [IndividualIncomeTaxModuleBase],
  controllers: [IndividualIncomeTaxController],
  providers: [IndividualIncomeTaxService, IndividualIncomeTaxResolver],
  exports: [IndividualIncomeTaxService],
})
export class IndividualIncomeTaxModule {}
