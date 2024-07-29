import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type IndividualIncomeTaxCreateInput = {
  annualIncome?: number | null;
  financialYear?: Date | null;
  incomeType?: string | null;
  taxPaid?: number | null;
  user?: UserWhereUniqueInput | null;
};
