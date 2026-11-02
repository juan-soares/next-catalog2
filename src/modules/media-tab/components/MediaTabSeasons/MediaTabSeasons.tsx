import type { MediaView } from "@/modules/media/types";
import { MediaTabGroup } from "@/modules/media-tab/components";

type Props = Pick<MediaView, "seasons" | "slug">;

export function MediaTabSeasons({ seasons, slug }: Props) {
  if (!seasons) return null;

  const createPath = `/${slug}/adicionar/temporadas`;

  return <MediaTabGroup createPath={createPath} group={seasons} />;
}
