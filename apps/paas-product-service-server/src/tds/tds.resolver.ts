import * as graphql from "@nestjs/graphql";
import { TdsResolverBase } from "./base/tds.resolver.base";
import { Tds } from "./base/Tds";
import { TdsService } from "./tds.service";

@graphql.Resolver(() => Tds)
export class TdsResolver extends TdsResolverBase {
  constructor(protected readonly service: TdsService) {
    super(service);
  }
}
