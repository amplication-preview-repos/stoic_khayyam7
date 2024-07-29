import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { USER_TITLE_FIELD } from "./UserTitle";

export const UserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Email" source="email" />
        <TextField label="First Name" source="firstName" />
        <TextField label="ID" source="id" />
        <TextField label="Last Name" source="lastName" />
        <TextField label="Roles" source="roles" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Username" source="username" />
        <ReferenceManyField
          reference="BusinessIncomeTax"
          target="userId"
          label="BusinessIncomeTaxes"
        >
          <Datagrid rowClick="show">
            <TextField label="annualIncome" source="annualIncome" />
            <TextField label="businessName" source="businessName" />
            <TextField label="businessType" source="businessType" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="financialYear" source="financialYear" />
            <TextField label="ID" source="id" />
            <TextField label="taxPaid" source="taxPaid" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="Gst" target="userId" label="GSTS">
          <Datagrid rowClick="show">
            <TextField label="annualTurnover" source="annualTurnover" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="financialYear" source="financialYear" />
            <TextField label="gstNumber" source="gstNumber" />
            <TextField label="ID" source="id" />
            <TextField label="taxPaid" source="taxPaid" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="IndividualIncomeTax"
          target="userId"
          label="IndividualIncomeTaxes"
        >
          <Datagrid rowClick="show">
            <TextField label="annualIncome" source="annualIncome" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="financialYear" source="financialYear" />
            <TextField label="ID" source="id" />
            <TextField label="incomeType" source="incomeType" />
            <TextField label="taxPaid" source="taxPaid" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="LegalCompliance"
          target="userId"
          label="LegalCompliances"
        >
          <Datagrid rowClick="show">
            <TextField label="businessName" source="businessName" />
            <TextField label="complianceDate" source="complianceDate" />
            <TextField label="complianceType" source="complianceType" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="status" source="status" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="Tds" target="userId" label="TDSItems">
          <Datagrid rowClick="show">
            <TextField label="annualTurnover" source="annualTurnover" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="financialYear" source="financialYear" />
            <TextField label="ID" source="id" />
            <TextField label="taxDeducted" source="taxDeducted" />
            <TextField
              label="tdsCertificateNumber"
              source="tdsCertificateNumber"
            />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
