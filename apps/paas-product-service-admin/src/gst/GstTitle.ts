import { Gst as TGst } from "../api/gst/Gst";

export const GST_TITLE_FIELD = "gstNumber";

export const GstTitle = (record: TGst): string => {
  return record.gstNumber?.toString() || String(record.id);
};
