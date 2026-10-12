import { MediaDetails } from "@/modules/media/types";
import { SeasonsList } from "@/modules/media/components";

export function TabSeasons({
  slug,
  type,
  seasons,
}: Pick<MediaDetails, "slug" | "type" | "seasons">) {
  if (!seasons) return null;

  return (
    <section>
      <SeasonsList type={type} slug={slug} seasons={seasons} />
    </section>
  );
}
