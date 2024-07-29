import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type GstWhereInput = {
  annualTurnover?: FloatNullableFilter;
  financialYear?: DateTimeNullableFilter;
  gstNumber?: StringNullableFilter;
  id?: StringFilter;
  taxPaid?: FloatNullableFilter;
  user?: UserWhereUniqueInput;
};
