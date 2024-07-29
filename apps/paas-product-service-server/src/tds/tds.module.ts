import { Module } from "@nestjs/common";
import { TdsModuleBase } from "./base/tds.module.base";
import { TdsService } from "./tds.service";
import { TdsController } from "./tds.controller";
import { TdsResolver } from "./tds.resolver";

@Module({
  imports: [TdsModuleBase],
  controllers: [TdsController],
  providers: [TdsService, TdsResolver],
  exports: [TdsService],
})
export class TdsModule {}
