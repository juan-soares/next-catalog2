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

type Props = {
  value: string;
  label: string;
};

export function EditGenreForm({ value, label }: Props) {
  return (
    <form action={updateGenreAction}>
      <input name="value" value={value} type="hidden" />

      <div>
        <label htmlFor="label">Nome</label>
        <input id="label" name="label" defaultValue={label} type="text" />
      </div>

      <ConfirmSubmitButton
        label="Salvar"
        confirmationMessage="Deseja realmente salvar a edição?"
      />
    </form>
  );
}
