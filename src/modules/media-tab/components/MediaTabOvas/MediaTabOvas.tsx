import type { MediaView } from "@/modules/media/types";
import { MediaTabGroup } from "@/modules/media-tab/components";

type Props = Pick<MediaView, "ovas" | "type" | "slug">;

export function MediaTabOvas({ ovas, type, slug }: Props) {
  if (!ovas) return null;

  const createPath = `/animes/${slug}/adicionar/ovas`;

  return <MediaTabGroup createPath={createPath} group={ovas} />;
}
