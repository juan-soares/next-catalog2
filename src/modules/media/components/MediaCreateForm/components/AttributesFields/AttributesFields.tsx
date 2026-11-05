import type { MediaAttributeView } from "@/modules/media/types";
import { PUBLIC_URLS } from "@/shared/consts";
import { PlusCircle } from "lucide-react";
import Link from "next/link";

type Props = {
  languages: MediaAttributeView[];
  themes: MediaAttributeView[];
  currentAttributes: { languageIds: string[]; themeIds: string[] };
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export function AttributesFields({
  languages,
  themes,
  currentAttributes,
  onChange,
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
              onChange={onChange}
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
              onChange={onChange}
            />
            {label}
          </label>
        ))}
      </div>
    </fieldset>
  );
}
