import { MediaTabGroup } from "@/modules/media-tab/components";
import type { MediaView } from "@/modules/media/types";

type Props = Pick<MediaView, "specials" | "slug">;

export function MediaTabSpecials({ specials, slug }: Props) {
  if (!specials) return null;

  const createPath = `/${slug}/adicionar/especiais`;

  return <MediaTabGroup createPath={createPath} group={specials} />;
}
