import { SortOrder } from "../../util/SortOrder";

export type BusinessIncomeTaxOrderByInput = {
  annualIncome?: SortOrder;
  businessName?: SortOrder;
  businessType?: SortOrder;
  createdAt?: SortOrder;
  financialYear?: SortOrder;
  id?: SortOrder;
  taxPaid?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
