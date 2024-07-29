import { IndividualIncomeTax as TIndividualIncomeTax } from "../api/individualIncomeTax/IndividualIncomeTax";

export const INDIVIDUALINCOMETAX_TITLE_FIELD = "incomeType";

export const IndividualIncomeTaxTitle = (
  record: TIndividualIncomeTax
): string => {
  return record.incomeType?.toString() || String(record.id);
};
