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

export const GstShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
