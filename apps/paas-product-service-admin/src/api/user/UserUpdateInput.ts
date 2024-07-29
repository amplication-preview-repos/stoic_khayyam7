import { BusinessIncomeTaxUpdateManyWithoutUsersInput } from "./BusinessIncomeTaxUpdateManyWithoutUsersInput";
import { GstUpdateManyWithoutUsersInput } from "./GstUpdateManyWithoutUsersInput";
import { IndividualIncomeTaxUpdateManyWithoutUsersInput } from "./IndividualIncomeTaxUpdateManyWithoutUsersInput";
import { LegalComplianceUpdateManyWithoutUsersInput } from "./LegalComplianceUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { TdsUpdateManyWithoutUsersInput } from "./TdsUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  businessIncomeTaxes?: BusinessIncomeTaxUpdateManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  gsts?: GstUpdateManyWithoutUsersInput;
  individualIncomeTaxes?: IndividualIncomeTaxUpdateManyWithoutUsersInput;
  lastName?: string | null;
  legalCompliances?: LegalComplianceUpdateManyWithoutUsersInput;
  password?: string;
  roles?: InputJsonValue;
  tdsItems?: TdsUpdateManyWithoutUsersInput;
  username?: string;
};
