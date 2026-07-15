/**
 * O que este arquivo faz:
 * - Renderiza o formulário de edição de um gênero.
 * - Envia os dados para a Server Action responsável pela atualização.
 *
 * O que este arquivo NÃO faz:
 * - Não acessa banco.
 * - Não conhece repository.
 * - Não contém regras de atualização.
 */

import { ConfirmSubmitButton } from "@/components/ui";
import { updateGenreAction } from "../../actions";
import type { Genre } from "../../genre.entity";

type Props = {
  attribute: Genre;
};

export function EditGenreForm({ attribute }: Props) {
  return (
    <form action={updateGenreAction}>
      <input name="value" value={attribute.value} type="hidden" />

      <div>
        <label htmlFor="label">Nome</label>

        <input
          id="label"
          name="label"
          defaultValue={attribute.label}
          type="text"
        />
      </div>

      <ConfirmSubmitButton
        label="Salvar"
        confirmationMessage="Deseja realmente salvar a edição?"
      />
    </form>
  );
}
