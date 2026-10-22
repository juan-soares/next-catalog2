import { MediaTabGroup } from "@/modules/media-tab/components";
import type { MediaView } from "@/modules/media/types";

type Props = Pick<MediaView, "specials" | "type" | "slug">;

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
