import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  DateTimeInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";

export const TdsEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="annualTurnover" source="annualTurnover" />
        <DateTimeInput label="financialYear" source="financialYear" />
        <NumberInput label="taxDeducted" source="taxDeducted" />
        <TextInput label="tdsCertificateNumber" source="tdsCertificateNumber" />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
