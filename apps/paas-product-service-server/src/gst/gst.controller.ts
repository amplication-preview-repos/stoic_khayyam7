import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { GstService } from "./gst.service";
import { GstControllerBase } from "./base/gst.controller.base";

@swagger.ApiTags("gsts")
@common.Controller("gsts")
export class GstController extends GstControllerBase {
  constructor(protected readonly service: GstService) {
    super(service);
  }
}
