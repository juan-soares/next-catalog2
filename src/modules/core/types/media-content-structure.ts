export type MediaContentStructure = {
  /**
Identificador da estrutura de conteúdo
   * Ex:
   * episode-group
   * chapter-group
   * expansion-group
   * track-group
   */
  key: string;

  /**
   * Nome exibido (opcional para admin/UI)
   */
  label?: string;

  /**
   * Ordem de exibição
   */
  order?: number;
};
