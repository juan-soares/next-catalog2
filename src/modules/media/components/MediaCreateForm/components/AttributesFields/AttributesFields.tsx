import type { MediaAttributeView } from "@/modules/media/types";

type Props = {
  languages: MediaAttributeView[];
  themes: MediaAttributeView[];
};

export function AttributesFields({ languages, themes }: Props) {
  return (
    <fieldset>
      <legend>Atributos:</legend>

      <div>
        <label htmlFor="languages">Idiomas</label>
        {languages.map(({ id, label }) => (
          <label htmlFor={id} key={id}>
            <input type="checkbox" name="languages" value={id} />
            {label}
          </label>
        ))}
      </div>

      <div>
        <label htmlFor="themes">Temas</label>
        {themes.map(({ id, label }) => (
          <label htmlFor={id} key={id}>
            <input type="checkbox" name="themes" value={id} />
            {label}
          </label>
        ))}
      </div>
    </fieldset>
  );
}
