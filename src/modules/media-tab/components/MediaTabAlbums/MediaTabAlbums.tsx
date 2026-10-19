import { MediaDetails } from "@/modules/media/types";
import { MediaTabGroup } from "@/modules/media-tab/components";

type Props = Pick<MediaDetails, "albums" | "type" | "slug">;

export function MediaTabAlbums({ albums, type, slug }: Props) {
  if (!albums) return null;

  return (
    <MediaTabGroup
      group={albums}
      mediaTypePath={type.path}
      groupTypeSlug="álbuns"
      mediaSlug={slug}
    />
  );
}
