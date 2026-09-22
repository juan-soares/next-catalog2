import type { MediaDetails } from "@/modules/media/types";

type Props = Pick<
  MediaDetails,
  "title" | "translatedTitle" | "releaseYear" | "type" | "themes"
>;

export function MediaInfoTab({
  title,
  translatedTitle,
  releaseYear,
  type,
  themes,
}: Props) {
  return (
    <section>
      <dl>
        <div>
          <dt>Título</dt>
          <dd>{title}</dd>
        </div>

        <div>
          <dt>Título traduzido</dt>
          <dd>{translatedTitle}</dd>
        </div>

        <div>
          <dt>Lançamento</dt>
          <dd>{releaseYear}</dd>
        </div>

        <div>
          <dt>Tipo</dt>
          <dd>{type.label}</dd>
        </div>

        <div>
          <dt>Temas</dt>
          <dd>
            {themes.length > 0
              ? themes.map((theme) => theme.label).join(", ")
              : "—"}
          </dd>
        </div>
      </dl>
    </section>
  );
}
