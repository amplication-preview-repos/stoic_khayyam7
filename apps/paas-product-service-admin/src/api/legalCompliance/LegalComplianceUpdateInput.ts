import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type LegalComplianceUpdateInput = {
  businessName?: string | null;
  complianceDate?: Date | null;
  complianceType?: string | null;
  status?: string | null;
  user?: UserWhereUniqueInput | null;
};
