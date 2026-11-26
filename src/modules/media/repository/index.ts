import "server-only";

import { findMedia } from "@/modules/media/repository/find-media.repository";

export const mediaRepository = {
  findOne: findMedia,
};
