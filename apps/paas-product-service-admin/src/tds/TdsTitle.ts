import { Tds as TTds } from "../api/tds/Tds";

export const TDS_TITLE_FIELD = "tdsCertificateNumber";

export const TdsTitle = (record: TTds): string => {
  return record.tdsCertificateNumber?.toString() || String(record.id);
};
