/**
 * Lista de todas as abas (seções) que podem aparecer na interface do CATFLIX.
 * Cada valor representa uma parte da navegação que o usuário pode ver dentro de um conteúdo.
 * O sistema usa isso para montar a interface automaticamente.
 */

export type TabType =
  | "overview"
  | "seasons"
  | "ovas"
  | "specials"
  | "volumes"
  | "chapters"
  | "tracks"
  | "gallery"
  | "files"
  | "franchise"
  | "relations";
