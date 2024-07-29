import { Module } from "@nestjs/common";
import { AiPoweredTdsService } from "./aipoweredtds.service";
import { AiPoweredTdsController } from "./aipoweredtds.controller";
import { AiPoweredTdsResolver } from "./aipoweredtds.resolver";

@Module({
  controllers: [AiPoweredTdsController],
  providers: [AiPoweredTdsService, AiPoweredTdsResolver],
  exports: [AiPoweredTdsService],
})
export class AiPoweredTdsModule {}
