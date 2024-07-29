import { LegalCompliance as TLegalCompliance } from "../api/legalCompliance/LegalCompliance";

export const LEGALCOMPLIANCE_TITLE_FIELD = "businessName";

export const LegalComplianceTitle = (record: TLegalCompliance): string => {
  return record.businessName?.toString() || String(record.id);
};
