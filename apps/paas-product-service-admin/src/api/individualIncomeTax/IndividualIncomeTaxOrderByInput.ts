import { SortOrder } from "../../util/SortOrder";

export type IndividualIncomeTaxOrderByInput = {
  annualIncome?: SortOrder;
  createdAt?: SortOrder;
  financialYear?: SortOrder;
  id?: SortOrder;
  incomeType?: SortOrder;
  taxPaid?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
