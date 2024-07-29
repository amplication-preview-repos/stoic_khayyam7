import { User } from "../user/User";

export type Gst = {
  annualTurnover: number | null;
  createdAt: Date;
  financialYear: Date | null;
  gstNumber: string | null;
  id: string;
  taxPaid: number | null;
  updatedAt: Date;
  user?: User | null;
};
