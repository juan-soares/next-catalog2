import "server-only";

import { createMedia } from "@/modules/media/repository/create-media.repository";
import { findMedias } from "@/modules/media/repository/find-medias.repository";

export const mediaRepository = {
  findMany: findMedias,
  createOne: createMedia,
};
