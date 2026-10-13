import { MediaDetails } from "@/modules/media/types";
import { MEDIA_GROUPS_REGISTRY, MediaGroupList } from "@/modules/media-group";

export function TabOvas({
  slug,
  type,
  ovas,
}: Pick<MediaDetails, "slug" | "type" | "ovas">) {
  if (!ovas) return null;

  return (
    <section>
      <MediaGroupList
        mediaTypeSlugPath={type.path}
        mediaSlug={slug}
        mediaGroupTypeSlug={MEDIA_GROUPS_REGISTRY.ova.slug}
        mediaGroupItems={ovas}
      />
    </section>
  );
}
