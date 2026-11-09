import type {
  AssetFolderType,
  AssetFolderTypeCode,
} from "@/modules/asset/types";
import { PATHS } from "@/shared/consts";

export const ASSET_FOLDER_TYPE_REGISTRY = {
  media: {
    code: "media",
    storage: PATHS.MEDIA.ASSETS,
  },

  franchise: {
    code: "franchise",
    storage: PATHS.MEDIA.ASSETS,
  },
} satisfies Record<AssetFolderTypeCode, AssetFolderType>;
