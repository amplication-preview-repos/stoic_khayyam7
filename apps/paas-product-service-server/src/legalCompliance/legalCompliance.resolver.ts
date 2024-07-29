import * as graphql from "@nestjs/graphql";
import { LegalComplianceResolverBase } from "./base/legalCompliance.resolver.base";
import { LegalCompliance } from "./base/LegalCompliance";
import { LegalComplianceService } from "./legalCompliance.service";

@graphql.Resolver(() => LegalCompliance)
export class LegalComplianceResolver extends LegalComplianceResolverBase {
  constructor(protected readonly service: LegalComplianceService) {
    super(service);
  }
}
