import { User } from "../user/User";

export type IndividualIncomeTax = {
  annualIncome: number | null;
  createdAt: Date;
  financialYear: Date | null;
  id: string;
  incomeType: string | null;
  taxPaid: number | null;
  updatedAt: Date;
  user?: User | null;
};
