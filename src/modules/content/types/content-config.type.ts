/**
 * Representa a configuração estrutural de um tipo de conteúdo.
 *
 * Define como um MediaType será apresentado dentro da interface,
 * incluindo abas disponíveis, estrutura interna e nomenclaturas.
 *
 * Não representa dados persistidos.
 * É uma definição de comportamento do sistema.
 */

import { ContentStructure } from "./content-structure.type";
import { TabType } from "./tab-type.type";

export type ContentConfig = {
  tabs: TabType[];

  structure: ContentStructure;

  labels: {
    groupLabel: string;
    itemLabel: string;
  };
};
