import { BusinessIncomeTax } from "../businessIncomeTax/BusinessIncomeTax";
import { Gst } from "../gst/Gst";
import { IndividualIncomeTax } from "../individualIncomeTax/IndividualIncomeTax";
import { LegalCompliance } from "../legalCompliance/LegalCompliance";
import { JsonValue } from "type-fest";
import { Tds } from "../tds/Tds";

export type User = {
  businessIncomeTaxes?: Array<BusinessIncomeTax>;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  gsts?: Array<Gst>;
  id: string;
  individualIncomeTaxes?: Array<IndividualIncomeTax>;
  lastName: string | null;
  legalCompliances?: Array<LegalCompliance>;
  roles: JsonValue;
  tdsItems?: Array<Tds>;
  updatedAt: Date;
  username: string;
};
