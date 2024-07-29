import * as graphql from "@nestjs/graphql";
import { IndividualIncomeTaxResolverBase } from "./base/individualIncomeTax.resolver.base";
import { IndividualIncomeTax } from "./base/IndividualIncomeTax";
import { IndividualIncomeTaxService } from "./individualIncomeTax.service";

@graphql.Resolver(() => IndividualIncomeTax)
export class IndividualIncomeTaxResolver extends IndividualIncomeTaxResolverBase {
  constructor(protected readonly service: IndividualIncomeTaxService) {
    super(service);
  }
}
