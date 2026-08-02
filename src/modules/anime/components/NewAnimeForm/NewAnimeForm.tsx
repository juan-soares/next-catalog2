import { MediaItemForm } from "@/modules/media-item";
import { AnimeAdditionalFields } from "../AnimeAdditionalFields";

export function NewAnimeForm() {
  return (
    <MediaItemForm mediaType="animes">
      <AnimeAdditionalFields />
    </MediaItemForm>
  );
}
