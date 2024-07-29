import { SortOrder } from "../../util/SortOrder";

export type GstOrderByInput = {
  annualTurnover?: SortOrder;
  createdAt?: SortOrder;
  financialYear?: SortOrder;
  gstNumber?: SortOrder;
  id?: SortOrder;
  taxPaid?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
