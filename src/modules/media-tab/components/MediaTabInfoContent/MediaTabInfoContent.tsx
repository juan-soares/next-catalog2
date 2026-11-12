import { FranchiseLogo } from "@/modules/franchise/components";
import type { MediaView } from "@/modules/media/types";

type Props = Pick<MediaView, "info" | "attributes">;

export function MediaTabInfoContent({ info, attributes }: Props) {
  const date = info.releaseDate.toLocaleDateString("pt-BR");
  const languages = attributes.languages.map(({ label }) => label).join(", ");
  const themes = attributes.themes.map(({ label }) => label).join(", ");

  return (
    <section>
      <h2>Informações</h2>

      <dl>
        <div>
          <dt>Título:</dt>
          <dd>{info.title}</dd>
        </div>

        <div>
          <dt>Título Traduzido:</dt>
          <dd>{info.translatedTitle || "N/A"}</dd>
        </div>

        <div>
          <dt>Lançamento:</dt>
          <dd>{date}</dd>
        </div>

        <div>
          <dt>Idiomas:</dt>
          <dd>{languages}</dd>
        </div>

        <div>
          <dt>Temáticas:</dt>
          <dd>{themes}</dd>
        </div>

        <div>
          <dt>Franquias:</dt>
          <dd>
            {attributes.franchises.map((franchise) => (
              <FranchiseLogo
                key={franchise.id}
                {...franchise}
                width={60}
                height={60}
              />
            ))}
          </dd>
        </div>
      </dl>
    </section>
  );
}
