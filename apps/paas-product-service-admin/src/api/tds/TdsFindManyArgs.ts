import { TdsWhereInput } from "./TdsWhereInput";
import { TdsOrderByInput } from "./TdsOrderByInput";

export type TdsFindManyArgs = {
  where?: TdsWhereInput;
  orderBy?: Array<TdsOrderByInput>;
  skip?: number;
  take?: number;
};
