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
  currentAttributes: {
    languageIds: string[];
    themeIds: string[];
    platformIds: string[];
    genreIds: string[];
    gameplayIds: string[];
    modeIds: string[];
    players: {
      min: number;
      max: number;
    };
  };
  onCheckboxChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSelectChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
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
  currentAttributes,
  onCheckboxChange,
  onChange,
  onSelectChange,
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
            <input
              id={id}
              type="checkbox"
              name="languageIds"
              value={id}
              checked={currentAttributes.languageIds.includes(id)}
              onChange={onCheckboxChange}
            />
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
            <input
              id={id}
              type="checkbox"
              name="themeIds"
              value={id}
              checked={currentAttributes.themeIds.includes(id)}
              onChange={onCheckboxChange}
            />
            {label}
          </label>
        ))}
      </div>

      {isGame && (
        <GameAttributesFields
          {...gameAttributes}
          currentAttributes={currentAttributes}
          onCheckboxChange={onCheckboxChange}
          onChange={onChange}
        />
      )}

      <div>
        <label htmlFor="franchiseId">Franquias</label>
        <Link href={`${PUBLIC_URLS.FRANCHISES.CREATE}`}>
          <PlusCircle />
        </Link>

        <select
          id="franchiseId"
          name="franchiseId"
          required
          onChange={onSelectChange}
        >
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
