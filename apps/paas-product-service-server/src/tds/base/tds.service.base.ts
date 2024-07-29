/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Tds as PrismaTds, User as PrismaUser } from "@prisma/client";

export class TdsServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.TdsCountArgs, "select">): Promise<number> {
    return this.prisma.tds.count(args);
  }

  async tdsItems(args: Prisma.TdsFindManyArgs): Promise<PrismaTds[]> {
    return this.prisma.tds.findMany(args);
  }
  async tds(args: Prisma.TdsFindUniqueArgs): Promise<PrismaTds | null> {
    return this.prisma.tds.findUnique(args);
  }
  async createTds(args: Prisma.TdsCreateArgs): Promise<PrismaTds> {
    return this.prisma.tds.create(args);
  }
  async updateTds(args: Prisma.TdsUpdateArgs): Promise<PrismaTds> {
    return this.prisma.tds.update(args);
  }
  async deleteTds(args: Prisma.TdsDeleteArgs): Promise<PrismaTds> {
    return this.prisma.tds.delete(args);
  }

  async getUser(parentId: string): Promise<PrismaUser | null> {
    return this.prisma.tds
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}
