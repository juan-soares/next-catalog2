import Link from "next/link";
import { PlusCircle } from "lucide-react";
import { PUBLIC_URLS } from "@/shared/consts";
import type { AttributeView } from "@/modules/attribute/types";
import type { FranchiseView } from "@/modules/franchise/types";
import { GameAttributesFields } from "@/modules/media/components/MediaCreateForm/components";

type Props = {
  isGame: boolean;
  languages: AttributeView[];
  themes: AttributeView[];
  platforms: AttributeView[];
  genres: AttributeView[];
  gameplays: AttributeView[];
  modes: AttributeView[];
  childlessFranchises: FranchiseView[];
};

export function AttributesFields({
  isGame,
  languages,
  themes,
  platforms,
  genres,
  gameplays,
  modes,
  childlessFranchises,
}: Props) {
  const gameAttributes = {
    platforms,
    genres,
    gameplays,
    modes,
  };

  return (
    <fieldset>
      <legend>Atributos:</legend>

      <div>
        <label>Idiomas</label>
        <Link href={`${PUBLIC_URLS.ATTRIBUTES.CREATE}?type=language`}>
          <PlusCircle />
        </Link>
        {languages.map(({ id, label }) => (
          <label htmlFor={id} key={id}>
            <input id={id} type="checkbox" name="languageIds" value={id} />
            {label}
          </label>
        ))}
      </div>

      <div>
        <label>Temas</label>
        <Link href={`${PUBLIC_URLS.ATTRIBUTES.CREATE}?type=theme`}>
          <PlusCircle />
        </Link>
        {themes.map(({ id, label }) => (
          <label htmlFor={id} key={id}>
            <input id={id} type="checkbox" name="themeIds" value={id} />
            {label}
          </label>
        ))}
      </div>

      {isGame && <GameAttributesFields {...gameAttributes} />}

      <div>
        <label htmlFor="franchiseId">Franquias</label>
        <Link href={`${PUBLIC_URLS.FRANCHISES.CREATE}`}>
          <PlusCircle />
        </Link>

        <select id="franchiseId" name="franchiseId" required defaultValue="">
          <option value="" hidden>
            Selecione...
          </option>

          {childlessFranchises.map(({ id, title }) => (
            <option key={id} value={id}>
              {title}
            </option>
          ))}
        </select>
      </div>
    </fieldset>
  );
}
