import type { MediaView } from "@/modules/media/types";
import { MediaTabGroup } from "@/modules/media-tab/components";

type Props = Pick<MediaView, "concerts" | "slug">;

export function MediaTabConcerts({ concerts, slug }: Props) {
  if (!concerts) return null;

  return (
    <MediaTabGroup
      group={concerts}
      createPath={`/${slug}/adicionar/concertos`}
    />
  );
}
