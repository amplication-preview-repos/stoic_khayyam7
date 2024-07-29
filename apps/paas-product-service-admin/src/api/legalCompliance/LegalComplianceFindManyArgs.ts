import { LegalComplianceWhereInput } from "./LegalComplianceWhereInput";
import { LegalComplianceOrderByInput } from "./LegalComplianceOrderByInput";

export type LegalComplianceFindManyArgs = {
  where?: LegalComplianceWhereInput;
  orderBy?: Array<LegalComplianceOrderByInput>;
  skip?: number;
  take?: number;
};
