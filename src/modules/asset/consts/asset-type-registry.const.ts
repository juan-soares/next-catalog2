import { PATHS } from "@/shared/consts";
import type { AssetType, AssetTypeCode } from "@/modules/asset/types";

export const ASSET_REGISTRY = {
  cover: {
    code: "cover",
    label: "Capa da mídia",
    storage: PATHS.MEDIA.ASSETS,
  },

  trailer: {
    code: "trailer",
    label: "Trailer da mídia",
    storage: PATHS.MEDIA.ASSETS,
  },

  image: {
    code: "image",
    label: "Imagem da mídia",
    storage: PATHS.MEDIA.ASSETS,
  },

  file: {
    code: "file",
    label: "Arquivo da mídia",
    storage: PATHS.MEDIA.ASSETS,
  },

  logo: {
    code: "logo",
    label: "Logotipo da franquia",
    storage: PATHS.FRANCHISE.ASSETS,
  },
} satisfies Record<AssetTypeCode, AssetType>;
