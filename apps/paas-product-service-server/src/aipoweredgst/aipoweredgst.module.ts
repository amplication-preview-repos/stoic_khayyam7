import { Module } from "@nestjs/common";
import { AiPoweredGstService } from "./aipoweredgst.service";
import { AiPoweredGstController } from "./aipoweredgst.controller";
import { AiPoweredGstResolver } from "./aipoweredgst.resolver";

@Module({
  controllers: [AiPoweredGstController],
  providers: [AiPoweredGstService, AiPoweredGstResolver],
  exports: [AiPoweredGstService],
})
export class AiPoweredGstModule {}
