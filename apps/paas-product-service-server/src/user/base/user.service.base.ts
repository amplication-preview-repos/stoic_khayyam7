/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  User as PrismaUser,
  BusinessIncomeTax as PrismaBusinessIncomeTax,
  Gst as PrismaGst,
  IndividualIncomeTax as PrismaIndividualIncomeTax,
  LegalCompliance as PrismaLegalCompliance,
  Tds as PrismaTds,
} from "@prisma/client";

export class UserServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.UserCountArgs, "select">): Promise<number> {
    return this.prisma.user.count(args);
  }

  async users(args: Prisma.UserFindManyArgs): Promise<PrismaUser[]> {
    return this.prisma.user.findMany(args);
  }
  async user(args: Prisma.UserFindUniqueArgs): Promise<PrismaUser | null> {
    return this.prisma.user.findUnique(args);
  }
  async createUser(args: Prisma.UserCreateArgs): Promise<PrismaUser> {
    return this.prisma.user.create(args);
  }
  async updateUser(args: Prisma.UserUpdateArgs): Promise<PrismaUser> {
    return this.prisma.user.update(args);
  }
  async deleteUser(args: Prisma.UserDeleteArgs): Promise<PrismaUser> {
    return this.prisma.user.delete(args);
  }

  async findBusinessIncomeTaxes(
    parentId: string,
    args: Prisma.BusinessIncomeTaxFindManyArgs
  ): Promise<PrismaBusinessIncomeTax[]> {
    return this.prisma.user
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .businessIncomeTaxes(args);
  }

  async findGsts(
    parentId: string,
    args: Prisma.GstFindManyArgs
  ): Promise<PrismaGst[]> {
    return this.prisma.user
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .gsts(args);
  }

  async findIndividualIncomeTaxes(
    parentId: string,
    args: Prisma.IndividualIncomeTaxFindManyArgs
  ): Promise<PrismaIndividualIncomeTax[]> {
    return this.prisma.user
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .individualIncomeTaxes(args);
  }

  async findLegalCompliances(
    parentId: string,
    args: Prisma.LegalComplianceFindManyArgs
  ): Promise<PrismaLegalCompliance[]> {
    return this.prisma.user
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .legalCompliances(args);
  }

  async findTdsItems(
    parentId: string,
    args: Prisma.TdsFindManyArgs
  ): Promise<PrismaTds[]> {
    return this.prisma.user
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .tdsItems(args);
  }
}
