import { GstWhereUniqueInput } from "./GstWhereUniqueInput";
import { GstUpdateInput } from "./GstUpdateInput";

export type UpdateGstArgs = {
  where: GstWhereUniqueInput;
  data: GstUpdateInput;
};
