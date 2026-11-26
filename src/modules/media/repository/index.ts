import "server-only";

import { findMedia } from "@/modules/media/repository/find-media.repository";
import { deleteMedia } from "@/modules/media/repository/delete-media.repository";

export const mediaRepository = {
  findOne: findMedia,
  deleteOne: deleteMedia,
};
