import { Module } from "@nestjs/common";
import { LegalComplianceModuleBase } from "./base/legalCompliance.module.base";
import { LegalComplianceService } from "./legalCompliance.service";
import { LegalComplianceController } from "./legalCompliance.controller";
import { LegalComplianceResolver } from "./legalCompliance.resolver";

@Module({
  imports: [LegalComplianceModuleBase],
  controllers: [LegalComplianceController],
  providers: [LegalComplianceService, LegalComplianceResolver],
  exports: [LegalComplianceService],
})
export class LegalComplianceModule {}
