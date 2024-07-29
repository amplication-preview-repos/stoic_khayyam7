import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type BusinessIncomeTaxWhereInput = {
  annualIncome?: FloatNullableFilter;
  businessName?: StringNullableFilter;
  businessType?: StringNullableFilter;
  financialYear?: DateTimeNullableFilter;
  id?: StringFilter;
  taxPaid?: FloatNullableFilter;
  user?: UserWhereUniqueInput;
};
