import { GstWhereInput } from "./GstWhereInput";
import { GstOrderByInput } from "./GstOrderByInput";

export type GstFindManyArgs = {
  where?: GstWhereInput;
  orderBy?: Array<GstOrderByInput>;
  skip?: number;
  take?: number;
};
