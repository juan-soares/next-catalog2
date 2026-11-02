import type { MediaView } from "@/modules/media/types";
import { MediaTabGroup } from "@/modules/media-tab/components";

type Props = Pick<MediaView, "albums" | "type" | "slug">;

export function MediaTabAlbums({ albums, type, slug }: Props) {
  if (!albums) return null;

  const createPath = `/musicas/${slug}/adicionar/albums`;

  return <MediaTabGroup createPath={createPath} group={albums} />;
}
