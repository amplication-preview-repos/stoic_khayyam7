import * as graphql from "@nestjs/graphql";
import { BusinessIncomeTaxResolverBase } from "./base/businessIncomeTax.resolver.base";
import { BusinessIncomeTax } from "./base/BusinessIncomeTax";
import { BusinessIncomeTaxService } from "./businessIncomeTax.service";

@graphql.Resolver(() => BusinessIncomeTax)
export class BusinessIncomeTaxResolver extends BusinessIncomeTaxResolverBase {
  constructor(protected readonly service: BusinessIncomeTaxService) {
    super(service);
  }
}
