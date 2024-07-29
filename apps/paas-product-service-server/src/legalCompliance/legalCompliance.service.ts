import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LegalComplianceServiceBase } from "./base/legalCompliance.service.base";

@Injectable()
export class LegalComplianceService extends LegalComplianceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
