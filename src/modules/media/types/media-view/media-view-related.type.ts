import type { MediaViewBase } from "@/modules/media/types/media-view";

export type MediaViewRelated = {
  id: MediaViewBase["id"];
  slug: MediaViewBase["slug"];
  url: MediaViewBase["url"];
  title: MediaViewBase["info"]["title"];
  cover: MediaViewBase["info"]["cover"];
  release: MediaViewBase["info"]["release"];
};
