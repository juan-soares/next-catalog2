import { MEDIA_TYPE_REGISTRY } from "@/modules/media-type/consts/media-type-registry.const";
import type {
  CreateMediaInput,
  MediaDTO,
  MediaView,
} from "@/modules/media/types";

export async function createMedia(
  input: CreateMediaInput,
): Promise<MediaView | null> {
  const slug = generateSlug(input.title);
  const typeSlug = MEDIA_TYPE_REGISTRY[input.typeCode].slug;

  const media: MediaDTO = {
    identifiers: {
      publicId: slug,
      path: `/${typeSlug}/${slug}`,
    },

    info: {
      title: input.title,
      translatedTitle: input.translatedTitle ?? "",
      typeCode: input.typeCode,
      releaseYear: new Date(input.releaseDate).getFullYear(),
      synopsis: input.synopsis,
    },

    attributes: {
      languageIds: input.languages,
      themeIds: input.themes,
      franchiseIds: input.franchise ? [input.franchise] : [],
    },

    characterIds: input.characters,

    assets: {
      coverAssetId: "",
      galleryAssetIds: [],
      fileAssetIds: [],
    },

    predecessorMediaId: input.sequel || null,

    status: {
      acquired: false,
      consumed: false,
    },
  };
}
