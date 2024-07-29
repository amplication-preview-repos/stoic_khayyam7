import { BusinessIncomeTax as TBusinessIncomeTax } from "../api/businessIncomeTax/BusinessIncomeTax";

export const BUSINESSINCOMETAX_TITLE_FIELD = "businessName";

export const BusinessIncomeTaxTitle = (record: TBusinessIncomeTax): string => {
  return record.businessName?.toString() || String(record.id);
};
