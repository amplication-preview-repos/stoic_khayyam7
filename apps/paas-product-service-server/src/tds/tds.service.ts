import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TdsServiceBase } from "./base/tds.service.base";

@Injectable()
export class TdsService extends TdsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
