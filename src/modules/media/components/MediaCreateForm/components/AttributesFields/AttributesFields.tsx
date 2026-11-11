import Link from "next/link";
import { PlusCircle } from "lucide-react";
import { PUBLIC_URLS } from "@/shared/consts";
import type { AttributeView } from "@/modules/attribute/types";
import type { FranchiseView } from "@/modules/franchise/types";

type Props = {
  languages: AttributeView[];
  themes: AttributeView[];
  childlessFranchises: FranchiseView[];
  currentAttributes: { languageIds: string[]; themeIds: string[] };
  onCheckboxChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSelectChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

export function AttributesFields({
  languages,
  themes,
  childlessFranchises,
  currentAttributes,
  onCheckboxChange,
  onSelectChange,
}: Props) {
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
