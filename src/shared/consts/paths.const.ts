import path from "node:path";

export const MEDIA_ITEM_COVER_PATH = "/assets/medias/";
export const MEDIA_TYPE_CATALOG_PATH = "/";

export const GLOBAL_SEARCH_PATH = "/pesquisar?";
export const LOGIN_PATH = "/login";

export const FRANCHISES_LOGO_STORAGE = {
  directory: path.join(process.cwd(), "public", "assets", "franchises"),
  url: "/assets/franchises",
};

export const CATALOG_ATTRIBUTES_PATH = "/catalogo/atributos";
export const CATALOG_ATTRIBUTES_NEW_PATH = CATALOG_ATTRIBUTES_PATH + "/novo";
export const CATALOG_ATTRIBUTES_EDIT_PATH = CATALOG_ATTRIBUTES_PATH + "/editar";

export const CATALOG_FRANCHISES_PATH = "/catalogo/franquias";
export const CATALOG_FRANCHISES_NEW_PATH = CATALOG_FRANCHISES_PATH + "/novo";
export const CATALOG_FRANCHISES_EDIT_PATH =
  CATALOG_FRANCHISES_PATH + "/editar/";

export const CATALOG_MEDIAS_PATH = "/catalogo/medias";
export const CATALOG_MEDIAS_NEW_PATH = CATALOG_MEDIAS_PATH + "/novo";
