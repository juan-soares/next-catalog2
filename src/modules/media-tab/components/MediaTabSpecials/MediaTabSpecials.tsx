import { MediaDetails } from "@/modules/media";
import { MediaTabGroup } from "@/modules/media-tab/components";

type Props = Pick<MediaDetails, "specials" | "type" | "slug">;

export function MediaTabSpecials({ specials, type, slug }: Props) {
  if (!specials) return null;

  return (
    <MediaTabGroup
      group={specials}
      mediaTypePath={type.path}
      groupTypeSlug="temporadas"
      mediaSlug={slug}
    />
  );
}
