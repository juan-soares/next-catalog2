import { MediaDetails } from "@/modules/media";
import { MediaTabGroup } from "@/modules/media-tab/components";

type Props = Pick<MediaDetails, "volumes" | "type" | "slug">;

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
