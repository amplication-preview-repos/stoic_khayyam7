import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BusinessIncomeTaxServiceBase } from "./base/businessIncomeTax.service.base";

@Injectable()
export class BusinessIncomeTaxService extends BusinessIncomeTaxServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
