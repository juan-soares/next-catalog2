import "server-only";

import { createMedia } from "@/modules/media/repository/create-media.repository";

export const mediaRepository = {
  createOne: createMedia,
};
