/**
 * O que este arquivo faz:
 * - Renderiza o formulário de criação de gênero.
 * - Envia os dados para a Server Action responsável pela criação.
 *
 * O que este arquivo NÃO faz:
 * - Não acessa banco de dados.
 * - Não conhece repositories.
 * - Não executa regras de negócio.
 * - Não cria entidades manualmente.
 */

import { createGenreAction } from "../../actions";

export function NewGenreForm() {
  return (
    <form action={createGenreAction}>
      <div>
        <label htmlFor="label">Nome</label>
        <input id="label" name="label" type="text" />
      </div>

      <button type="submit">Enviar</button>
    </form>
  );
}
