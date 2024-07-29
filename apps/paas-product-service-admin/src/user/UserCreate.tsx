import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  PasswordInput,
} from "react-admin";

import { BusinessIncomeTaxTitle } from "../businessIncomeTax/BusinessIncomeTaxTitle";
import { GstTitle } from "../gst/GstTitle";
import { IndividualIncomeTaxTitle } from "../individualIncomeTax/IndividualIncomeTaxTitle";
import { LegalComplianceTitle } from "../legalCompliance/LegalComplianceTitle";
import { TdsTitle } from "../tds/TdsTitle";
import { ROLES_OPTIONS } from "../user/RolesOptions";

export const UserCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="businessIncomeTaxes"
          reference="BusinessIncomeTax"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={BusinessIncomeTaxTitle} />
        </ReferenceArrayInput>
        <TextInput label="Email" source="email" type="email" />
        <TextInput label="First Name" source="firstName" />
        <ReferenceArrayInput
          source="gsts"
          reference="Gst"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={GstTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="individualIncomeTaxes"
          reference="IndividualIncomeTax"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={IndividualIncomeTaxTitle} />
        </ReferenceArrayInput>
        <TextInput label="Last Name" source="lastName" />
        <ReferenceArrayInput
          source="legalCompliances"
          reference="LegalCompliance"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={LegalComplianceTitle} />
        </ReferenceArrayInput>
        <PasswordInput label="Password" source="password" />
        <SelectArrayInput
          source="roles"
          choices={ROLES_OPTIONS}
          optionText="label"
          optionValue="value"
        />
        <ReferenceArrayInput
          source="tdsItems"
          reference="Tds"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TdsTitle} />
        </ReferenceArrayInput>
        <TextInput label="Username" source="username" />
      </SimpleForm>
    </Create>
  );
};
