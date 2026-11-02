import type { AssetTypeCode } from "@/modules/asset/types";

export type AssetType = {
  code: AssetTypeCode;
  label: string;
  storage: string;
};
