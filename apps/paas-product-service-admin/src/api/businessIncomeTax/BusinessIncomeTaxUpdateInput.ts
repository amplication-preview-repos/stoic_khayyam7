import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type BusinessIncomeTaxUpdateInput = {
  annualIncome?: number | null;
  businessName?: string | null;
  businessType?: string | null;
  financialYear?: Date | null;
  taxPaid?: number | null;
  user?: UserWhereUniqueInput | null;
};
