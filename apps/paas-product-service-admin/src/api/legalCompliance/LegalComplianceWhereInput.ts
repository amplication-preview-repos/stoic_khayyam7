import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type LegalComplianceWhereInput = {
  businessName?: StringNullableFilter;
  complianceDate?: DateTimeNullableFilter;
  complianceType?: StringNullableFilter;
  id?: StringFilter;
  status?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
