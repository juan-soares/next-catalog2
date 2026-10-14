import { MediaDetails } from "@/modules/media";
import { MediaTabGroup } from "@/modules/media-tab/components";

type Props = Pick<MediaDetails, "concerts" | "type" | "slug">;

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
