import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TdsService } from "./tds.service";
import { TdsControllerBase } from "./base/tds.controller.base";

@swagger.ApiTags("tds")
@common.Controller("tds")
export class TdsController extends TdsControllerBase {
  constructor(protected readonly service: TdsService) {
    super(service);
  }
}
