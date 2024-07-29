import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type IndividualIncomeTaxWhereInput = {
  annualIncome?: FloatNullableFilter;
  financialYear?: DateTimeNullableFilter;
  id?: StringFilter;
  incomeType?: StringNullableFilter;
  taxPaid?: FloatNullableFilter;
  user?: UserWhereUniqueInput;
};
