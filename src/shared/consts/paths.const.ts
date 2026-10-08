import path from "node:path";

export const MEDIA_ITEM_COVER_PATH = "/assets/medias/";
export const MEDIA_TYPE_CATALOG_PATH = "/";

export const GLOBAL_SEARCH_PATH = "/pesquisar?";

export const MEDIA_STORAGE = {
  directory: path.join(process.cwd(), "public", "assets", "medias"),
  url: "/assets/medias",
};

export const FRANCHISES_STORAGE = {
  LOGO: {
    directory: path.join(process.cwd(), "public", "assets", "franchises"),
    url: "/assets/franchises",
  },
};

export const CATALOG_GLOBAL_SEARCH_PATH = "/catalogo/pesquisar?";

export const CATALOG_ATTRIBUTES_PATH = "/catalogo/atributos";
export const CATALOG_ATTRIBUTES_NEW_PATH = CATALOG_ATTRIBUTES_PATH + "/novo";
export const CATALOG_ATTRIBUTES_EDIT_PATH = CATALOG_ATTRIBUTES_PATH + "/editar";

export const CATALOG_FRANCHISES_PATH = "/catalogo/franquias";
export const CATALOG_FRANCHISES_NEW_PATH = CATALOG_FRANCHISES_PATH + "/novo";
export const CATALOG_FRANCHISES_EDIT_PATH =
  CATALOG_FRANCHISES_PATH + "/editar/";

export const CATALOG_MEDIAS_PATH = "/catalogo/midias";
export const CATALOG_MEDIAS_NEW_PATH = CATALOG_MEDIAS_PATH + "/novo";

//
export const LOGIN_PATH = "/login";

export const ADMIN_PANEL_PATH = "/admin/painel";
export const ADMIN_ATTRIBUTES_PATH = "/admin/atributos";
export const ADMIN_ATTRIBUTES_CREATE_PATH =
  ADMIN_ATTRIBUTES_PATH + "/adicionar";
export const ADMIN_ATTRIBUTES_EDIT_PATH = ADMIN_ATTRIBUTES_PATH + "/editar";
export const ADMIN_FRANCHISES_PATH = "/admin/franquias";
export const ADMIN_FRANCHISES_CREATE_PATH =
  ADMIN_FRANCHISES_PATH + "/adicionar";
