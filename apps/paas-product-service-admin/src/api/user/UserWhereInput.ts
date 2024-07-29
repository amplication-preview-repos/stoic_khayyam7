import { BusinessIncomeTaxListRelationFilter } from "../businessIncomeTax/BusinessIncomeTaxListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { GstListRelationFilter } from "../gst/GstListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { IndividualIncomeTaxListRelationFilter } from "../individualIncomeTax/IndividualIncomeTaxListRelationFilter";
import { LegalComplianceListRelationFilter } from "../legalCompliance/LegalComplianceListRelationFilter";
import { TdsListRelationFilter } from "../tds/TdsListRelationFilter";

export type UserWhereInput = {
  businessIncomeTaxes?: BusinessIncomeTaxListRelationFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  gsts?: GstListRelationFilter;
  id?: StringFilter;
  individualIncomeTaxes?: IndividualIncomeTaxListRelationFilter;
  lastName?: StringNullableFilter;
  legalCompliances?: LegalComplianceListRelationFilter;
  tdsItems?: TdsListRelationFilter;
  username?: StringFilter;
};
