import { User } from "../user/User";

export type LegalCompliance = {
  businessName: string | null;
  complianceDate: Date | null;
  complianceType: string | null;
  createdAt: Date;
  id: string;
  status: string | null;
  updatedAt: Date;
  user?: User | null;
};
