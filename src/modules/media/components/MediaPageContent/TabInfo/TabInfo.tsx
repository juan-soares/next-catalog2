import { MediaDetails } from "@/modules/media/types";

type Props = Pick<MediaDetails, "title" | "translatedTitle" | "releaseYear">;

export function TabInfo({ title, translatedTitle, releaseYear }: Props) {
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
