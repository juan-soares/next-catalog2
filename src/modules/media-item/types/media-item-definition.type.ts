/**
 * Define a estrutura da página de detalhes de um MediaItem.
 *
 * Responsabilidade
 * - Centralizar as definições utilizadas pela página de detalhes.
 * - Definir quais seções estarão disponíveis para o usuário.
 * - Servir como fonte de configuração para qualquer MediaItem
 *   pertencente a um MediaType.
 *
 * Não deve
 * - Conter dados provenientes do banco de dados.
 * - Executar consultas.
 * - Conhecer componentes React.
 */

export type MediaItemDefinition = {
  /**
   * Definições das abas disponíveis na página de detalhes.
   */
  tabs: unknown[];
};
