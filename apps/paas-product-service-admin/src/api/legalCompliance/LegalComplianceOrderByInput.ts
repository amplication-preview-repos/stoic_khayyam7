import { SortOrder } from "../../util/SortOrder";

export type LegalComplianceOrderByInput = {
  businessName?: SortOrder;
  complianceDate?: SortOrder;
  complianceType?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
