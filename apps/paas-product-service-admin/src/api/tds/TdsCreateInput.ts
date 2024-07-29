import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TdsCreateInput = {
  annualTurnover?: number | null;
  financialYear?: Date | null;
  taxDeducted?: number | null;
  tdsCertificateNumber?: string | null;
  user?: UserWhereUniqueInput | null;
};
