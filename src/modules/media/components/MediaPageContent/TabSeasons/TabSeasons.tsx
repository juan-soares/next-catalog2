import { MediaDetails } from "@/modules/media/types";
import { MEDIA_GROUPS_REGISTRY, MediaGroupList } from "@/modules/media-group";

export function TabSeasons({
  slug,
  type,
  seasons,
}: Pick<MediaDetails, "slug" | "type" | "seasons">) {
  if (!seasons) return null;

  return (
    <section>
      <MediaGroupList
        mediaTypeSlugPath={type.path}
        mediaSlug={slug}
        mediaGroupTypeSlug={MEDIA_GROUPS_REGISTRY.season.slug}
        mediaGroupItems={seasons}
      />
    </section>
  );
}
