import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { IndividualIncomeTaxServiceBase } from "./base/individualIncomeTax.service.base";

@Injectable()
export class IndividualIncomeTaxService extends IndividualIncomeTaxServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
