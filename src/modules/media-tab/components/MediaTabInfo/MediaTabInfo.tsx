import { MediaTabDetails } from "@/modules/media-tab/types";

type Props = Pick<MediaTabDetails, "title" | "translatedTitle" | "releaseYear">;

export function MediaTabInfo({ title, translatedTitle, releaseYear }: Props) {
  return (
    <section>
      <dl>
        <dt>Título:</dt>
        <dd>{title}</dd>

        <dt>Título Traduzido:</dt>
        <dd>{translatedTitle}</dd>

        <dt>Lançamento:</dt>
        <dd>{releaseYear}</dd>
      </dl>
    </section>
  );
}
