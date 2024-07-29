import { User } from "../user/User";

export type Tds = {
  annualTurnover: number | null;
  createdAt: Date;
  financialYear: Date | null;
  id: string;
  taxDeducted: number | null;
  tdsCertificateNumber: string | null;
  updatedAt: Date;
  user?: User | null;
};
