import { MediaItemForm } from "@/modules/1-media-item";
import { AnimeAdditionalFields } from "../AnimeAdditionalFields";

export function NewAnimeForm() {
  return (
    <MediaItemForm mediaType="animes">
      <AnimeAdditionalFields />
    </MediaItemForm>
  );
}
