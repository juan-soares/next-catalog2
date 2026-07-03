/**
 * Filter de idioma (Language Filter).
 *
 * Responsabilidade
 * - Definir o filtro global de idiomas disponíveis no sistema.
 * - Fornecer opções de idioma para qualquer MediaType que o utilize.
 * - Servir como primitive reutilizável dentro do sistema de catálogo.
 *
 * Não deve
 * - Conhecer MediaTypes específicos.
 * - Conter lógica de UI.
 * - Executar regras de negócio fora do contexto de atributos.
 */

import { FilterDefinition } from "../types/filter-definition.type";

/**
 * Simulação de source de dados.
 * No futuro isso virá de repository (MongoDB).
 */
async function getLanguages() {
  return [
    { value: "pt", label: "Português" },
    { value: "en", label: "Inglês" },
    { value: "jp", label: "Japonês" },
    { value: "kr", label: "Coreano" },
  ];
}

export const languageFilter: FilterDefinition = {
  key: "language",

  label: "Idioma",

  async getOptions() {
    return getLanguages();
  },
};
