import type { MediaView } from "@/modules/media/types";
import { MediaTabGroup } from "@/modules/media-tab/components";

type Props = Pick<MediaView, "ovas" | "type" | "slug">;

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
