import type { MediaViewBase } from "@/modules/media/types";

export type MediaViewMovieFamily = MediaViewBase & {
  categoryCode: "live-action-movie" | "animated-movie";
};
