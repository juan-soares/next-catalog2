/**
 * O que este arquivo faz:
 * - Define o contrato de um MediaType individual.
 * - Representa as informações e capacidades que um tipo de mídia possui.
 *
 * O que este arquivo NÃO faz:
 * - Não define quais MediaTypes existem.
 * - Não define slugs.
 * - Não conhece o Registry.
 * - Não conhece URLs.
 * - Não acessa banco de dados.
 */

import { MediaTypeCatalog } from "../media-type.catalog.type";
import { MediaTypeAdmin } from "./media-type.admin.type";

export type MediaType = {
  label: string;
  catalog: MediaTypeCatalog;
  admin: MediaTypeAdmin;
};
