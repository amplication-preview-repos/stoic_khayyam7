import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type GstCreateInput = {
  annualTurnover?: number | null;
  financialYear?: Date | null;
  gstNumber?: string | null;
  taxPaid?: number | null;
  user?: UserWhereUniqueInput | null;
};
