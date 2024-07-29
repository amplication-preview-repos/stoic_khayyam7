import { SortOrder } from "../../util/SortOrder";

export type TdsOrderByInput = {
  annualTurnover?: SortOrder;
  createdAt?: SortOrder;
  financialYear?: SortOrder;
  id?: SortOrder;
  taxDeducted?: SortOrder;
  tdsCertificateNumber?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
