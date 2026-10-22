import { MediaTabGroup } from "@/modules/media-tab/components";
import type { MediaView } from "@/modules/media/types";

type Props = Pick<MediaView, "volumes" | "type" | "slug">;

export function MediaTabVolumes({ volumes, type, slug }: Props) {
  if (!volumes) return null;

  return (
    <MediaTabGroup
      group={volumes}
      mediaTypePath={type.path}
      groupTypeSlug="volumes"
      mediaSlug={slug}
    />
  );
}
