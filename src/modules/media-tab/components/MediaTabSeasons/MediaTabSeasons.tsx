import type { MediaView } from "@/modules/media/types";
import { MediaTabGroup } from "@/modules/media-tab/components";

type Props = Pick<MediaView, "seasons" | "type" | "slug">;

export function MediaTabSeasons({ seasons, type, slug }: Props) {
  if (!seasons) return null;

  const createPath = `${typePath}/${slug}/adicionar/temporadas`;

  return <MediaTabGroup createPath={createPath} group={seasons} />;
}
