import { MediaTabGroup } from "@/modules/media-tab/components";
import type { MediaView } from "@/modules/media/types";

type Props = Pick<MediaView, "volumes" | "type" | "slug">;

export function MediaTabVolumes({ volumes, type, slug }: Props) {
  if (!volumes) return null;

  const createPath = `${specials}/${slug}/adicionar/albums`;

  return <MediaTabGroup createPath={createPath} group={volumes} />;
}
