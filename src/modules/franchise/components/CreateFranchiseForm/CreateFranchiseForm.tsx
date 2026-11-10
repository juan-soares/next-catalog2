import { createFranchiseAction } from "@/modules/franchise/actions";
import type { FranchiseView } from "@/modules/franchise/types";
import { MEDIA_TYPE_LIST } from "@/modules/media-type/consts";

type Props = {
  franchises: FranchiseView[];
};

export function CreateFranchiseForm({ franchises }: Props) {
  return (
    <form action={createFranchiseAction}>
      <label>
        Título:
        <input type="text" name="title" required />
      </label>

      <label>
        Título Traduzido:
        <input type="text" name="translatedTitle" />
      </label>

      <label>
        Logo:
        <input type="file" name="logo" accept="image/png" required />
      </label>

      <label>
        Tipo:
        <select name="type">
          <option value="" hidden>
            Selecione...
          </option>

          {MEDIA_TYPE_LIST.map(({ code, label }) => (
            <option key={code} value={code}>
              {label}
            </option>
          ))}
        </select>
      </label>

      <label>
        Pertence a:
        <select name="parentFranchiseId">
          <option value="" hidden>
            Selecione...
          </option>

          {franchises.map(({ id, title }) => (
            <option key={id} value={id}>
              {title}
            </option>
          ))}
        </select>
      </label>

      <button>Enviar</button>
    </form>
  );
}
