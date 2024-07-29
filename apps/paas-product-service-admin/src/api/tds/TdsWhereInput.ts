import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TdsWhereInput = {
  annualTurnover?: FloatNullableFilter;
  financialYear?: DateTimeNullableFilter;
  id?: StringFilter;
  taxDeducted?: FloatNullableFilter;
  tdsCertificateNumber?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
