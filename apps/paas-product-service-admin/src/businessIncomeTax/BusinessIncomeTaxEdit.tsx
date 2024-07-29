import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";

export const BusinessIncomeTaxEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="annualIncome" source="annualIncome" />
        <TextInput label="businessName" source="businessName" />
        <TextInput label="businessType" source="businessType" />
        <DateTimeInput label="financialYear" source="financialYear" />
        <NumberInput label="taxPaid" source="taxPaid" />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
