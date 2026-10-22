import type { MediaView } from "@/modules/media/types";
import { MediaTabGroup } from "@/modules/media-tab/components";

type Props = Pick<MediaView, "concerts" | "type" | "slug">;

export function MediaTabConcerts({ concerts, type, slug }: Props) {
  if (!concerts) return null;

  return (
    <MediaTabGroup
      group={concerts}
      mediaTypePath={type.path}
      groupTypeSlug="shows"
      mediaSlug={slug}
    />
  );
}
