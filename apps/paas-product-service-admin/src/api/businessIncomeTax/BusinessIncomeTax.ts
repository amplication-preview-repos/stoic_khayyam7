import { User } from "../user/User";

export type BusinessIncomeTax = {
  annualIncome: number | null;
  businessName: string | null;
  businessType: string | null;
  createdAt: Date;
  financialYear: Date | null;
  id: string;
  taxPaid: number | null;
  updatedAt: Date;
  user?: User | null;
};
