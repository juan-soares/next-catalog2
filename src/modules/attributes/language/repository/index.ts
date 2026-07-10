/**
 * O que este arquivo faz:
 * - Cria a API pública do repository de Language.
 * - Esconde os arquivos internos de implementação.
 *
 * O que este arquivo NÃO faz:
 * - Não acessa banco diretamente.
 * - Não contém regras de negócio.
 * - Não conhece UI.
 */

import { findAllLanguages } from "./find-all-languages.repository";
import { findLanguageByValue } from "./find-language-by-value.repository";

export const languageRepository = {
  findAll: findAllLanguages,
  findByValue: findLanguageByValue,
};
