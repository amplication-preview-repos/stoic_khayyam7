import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const TdsList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"TDSItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="annualTurnover" source="annualTurnover" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="financialYear" source="financialYear" />
        <TextField label="ID" source="id" />
        <TextField label="taxDeducted" source="taxDeducted" />
        <TextField label="tdsCertificateNumber" source="tdsCertificateNumber" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="User" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
