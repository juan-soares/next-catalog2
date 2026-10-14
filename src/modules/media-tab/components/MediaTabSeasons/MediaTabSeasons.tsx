import { MediaDetails } from "@/modules/media";
import { MediaTabGroup } from "@/modules/media-tab/components";

type Props = Pick<MediaDetails, "seasons" | "type" | "slug">;

export function MediaTabSeasons({ seasons, type, slug }: Props) {
  if (!seasons) return null;

  return (
    <MediaTabGroup
      group={seasons}
      mediaTypePath={type.path}
      groupTypeSlug="temporadas"
      mediaSlug={slug}
    />
  );
}
