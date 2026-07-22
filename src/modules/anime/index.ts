export * from "./types";

import { MediaTypeModule } from "../media-type/types";
import { AnimePage } from "./components";

export const AnimeModule: MediaTypeModule = {
  page: AnimePage,
};
