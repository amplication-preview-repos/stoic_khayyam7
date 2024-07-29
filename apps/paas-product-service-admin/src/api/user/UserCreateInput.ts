import { BusinessIncomeTaxCreateNestedManyWithoutUsersInput } from "./BusinessIncomeTaxCreateNestedManyWithoutUsersInput";
import { GstCreateNestedManyWithoutUsersInput } from "./GstCreateNestedManyWithoutUsersInput";
import { IndividualIncomeTaxCreateNestedManyWithoutUsersInput } from "./IndividualIncomeTaxCreateNestedManyWithoutUsersInput";
import { LegalComplianceCreateNestedManyWithoutUsersInput } from "./LegalComplianceCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { TdsCreateNestedManyWithoutUsersInput } from "./TdsCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  businessIncomeTaxes?: BusinessIncomeTaxCreateNestedManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  gsts?: GstCreateNestedManyWithoutUsersInput;
  individualIncomeTaxes?: IndividualIncomeTaxCreateNestedManyWithoutUsersInput;
  lastName?: string | null;
  legalCompliances?: LegalComplianceCreateNestedManyWithoutUsersInput;
  password: string;
  roles: InputJsonValue;
  tdsItems?: TdsCreateNestedManyWithoutUsersInput;
  username: string;
};
