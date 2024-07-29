import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const BusinessIncomeTaxShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
