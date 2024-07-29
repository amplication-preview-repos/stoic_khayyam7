import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { IndividualIncomeTaxList } from "./individualIncomeTax/IndividualIncomeTaxList";
import { IndividualIncomeTaxCreate } from "./individualIncomeTax/IndividualIncomeTaxCreate";
import { IndividualIncomeTaxEdit } from "./individualIncomeTax/IndividualIncomeTaxEdit";
import { IndividualIncomeTaxShow } from "./individualIncomeTax/IndividualIncomeTaxShow";
import { BusinessIncomeTaxList } from "./businessIncomeTax/BusinessIncomeTaxList";
import { BusinessIncomeTaxCreate } from "./businessIncomeTax/BusinessIncomeTaxCreate";
import { BusinessIncomeTaxEdit } from "./businessIncomeTax/BusinessIncomeTaxEdit";
import { BusinessIncomeTaxShow } from "./businessIncomeTax/BusinessIncomeTaxShow";
import { TdsList } from "./tds/TdsList";
import { TdsCreate } from "./tds/TdsCreate";
import { TdsEdit } from "./tds/TdsEdit";
import { TdsShow } from "./tds/TdsShow";
import { GstList } from "./gst/GstList";
import { GstCreate } from "./gst/GstCreate";
import { GstEdit } from "./gst/GstEdit";
import { GstShow } from "./gst/GstShow";
import { LegalComplianceList } from "./legalCompliance/LegalComplianceList";
import { LegalComplianceCreate } from "./legalCompliance/LegalComplianceCreate";
import { LegalComplianceEdit } from "./legalCompliance/LegalComplianceEdit";
import { LegalComplianceShow } from "./legalCompliance/LegalComplianceShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"PaasProductService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="IndividualIncomeTax"
          list={IndividualIncomeTaxList}
          edit={IndividualIncomeTaxEdit}
          create={IndividualIncomeTaxCreate}
          show={IndividualIncomeTaxShow}
        />
        <Resource
          name="BusinessIncomeTax"
          list={BusinessIncomeTaxList}
          edit={BusinessIncomeTaxEdit}
          create={BusinessIncomeTaxCreate}
          show={BusinessIncomeTaxShow}
        />
        <Resource
          name="Tds"
          list={TdsList}
          edit={TdsEdit}
          create={TdsCreate}
          show={TdsShow}
        />
        <Resource
          name="Gst"
          list={GstList}
          edit={GstEdit}
          create={GstCreate}
          show={GstShow}
        />
        <Resource
          name="LegalCompliance"
          list={LegalComplianceList}
          edit={LegalComplianceEdit}
          create={LegalComplianceCreate}
          show={LegalComplianceShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
