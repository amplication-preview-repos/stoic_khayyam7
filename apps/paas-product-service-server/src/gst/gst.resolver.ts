import * as graphql from "@nestjs/graphql";
import { GstResolverBase } from "./base/gst.resolver.base";
import { Gst } from "./base/Gst";
import { GstService } from "./gst.service";

@graphql.Resolver(() => Gst)
export class GstResolver extends GstResolverBase {
  constructor(protected readonly service: GstService) {
    super(service);
  }
}
