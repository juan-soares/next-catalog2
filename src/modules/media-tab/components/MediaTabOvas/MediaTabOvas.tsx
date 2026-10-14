import { MediaDetails } from "@/modules/media";
import { MediaTabGroup } from "@/modules/media-tab/components";

type Props = Pick<MediaDetails, "ovas" | "type" | "slug">;

export function MediaTabOvas({ ovas, type, slug }: Props) {
  if (!ovas) return null;

  return (
    <MediaTabGroup
      group={ovas}
      mediaTypePath={type.path}
      groupTypeSlug="temporadas"
      mediaSlug={slug}
    />
  );
}
