import { Module } from "@nestjs/common";
import { GstModuleBase } from "./base/gst.module.base";
import { GstService } from "./gst.service";
import { GstController } from "./gst.controller";
import { GstResolver } from "./gst.resolver";

@Module({
  imports: [GstModuleBase],
  controllers: [GstController],
  providers: [GstService, GstResolver],
  exports: [GstService],
})
export class GstModule {}
