import { createFranchiseAction } from "@/modules/franchise/actions";
import type { FranchiseView } from "@/modules/franchise/types";

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
        Franquia Pai:
        <select name="parentFranchiseId">
          <option value="" hidden>
            Nenhuma (franquia principal)
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
