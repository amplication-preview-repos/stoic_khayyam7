import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { GstServiceBase } from "./base/gst.service.base";

@Injectable()
export class GstService extends GstServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
