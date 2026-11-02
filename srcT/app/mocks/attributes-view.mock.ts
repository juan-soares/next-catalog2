import type { AttributeView } from "@/modules/attribute/types";

export const ATTRIBUTES_VIEW_MOCK: AttributeView[] = [
  // Languages
  {
    id: "language-pt-br",
    label: "Português",
    type: { label: "Idioma" },
  },
  {
    id: "language-en",
    label: "Inglês",
    type: { label: "Idioma" },
  },
  {
    id: "language-dubbed",
    label: "Dublado",
    type: { label: "Idioma" },
  },
  {
    id: "language-subtitled",
    label: "Legendado",
    type: { label: "Idioma" },
  },

  // Resolutions
  {
    id: "resolution-720p",
    label: "720p",
    type: { label: "Resolução" },
  },
  {
    id: "resolution-1080p",
    label: "1080p",
    type: { label: "Resolução" },
  },
  {
    id: "resolution-4k",
    label: "4K",
    type: { label: "Resolução" },
  },

  // Themes
  {
    id: "theme-action",
    label: "Ação",
    type: { label: "Tema" },
  },
  {
    id: "theme-adventure",
    label: "Aventura",
    type: { label: "Tema" },
  },
  {
    id: "theme-drama",
    label: "Drama",
    type: { label: "Tema" },
  },
  {
    id: "theme-scifi",
    label: "Ficção científica",
    type: { label: "Tema" },
  },

  // Franchises
  {
    id: "franchise-naruto",
    label: "Naruto",
    type: { label: "Franquia" },
  },
  {
    id: "franchise-spiderman",
    label: "Homem-Aranha",
    type: { label: "Franquia" },
  },
  {
    id: "franchise-the-sims",
    label: "The Sims",
    type: { label: "Franquia" },
  },

  // Platforms
  {
    id: "platform-pc",
    label: "PC",
    type: { label: "Plataforma" },
  },
  {
    id: "platform-playstation-5",
    label: "PlayStation 5",
    type: { label: "Plataforma" },
  },
  {
    id: "platform-xbox-series",
    label: "Xbox Series X|S",
    type: { label: "Plataforma" },
  },
  {
    id: "platform-switch",
    label: "Nintendo Switch",
    type: { label: "Plataforma" },
  },

  // Genres
  {
    id: "genre-simulation",
    label: "Simulação",
    type: { label: "Gênero" },
  },
  {
    id: "genre-rpg",
    label: "RPG",
    type: { label: "Gênero" },
  },
  {
    id: "genre-action",
    label: "Ação",
    type: { label: "Gênero" },
  },
  {
    id: "genre-adventure",
    label: "Aventura",
    type: { label: "Gênero" },
  },

  // Gameplay
  {
    id: "gameplay-open-world",
    label: "Mundo aberto",
    type: { label: "Jogabilidade" },
  },
  {
    id: "gameplay-building",
    label: "Construção",
    type: { label: "Jogabilidade" },
  },
  {
    id: "gameplay-life-simulation",
    label: "Simulação de vida",
    type: { label: "Jogabilidade" },
  },

  // Modes
  {
    id: "mode-single-player",
    label: "Um jogador",
    type: { label: "Modo de jogo" },
  },
  {
    id: "mode-local-multiplayer",
    label: "Multiplayer local",
    type: { label: "Modo de jogo" },
  },
  {
    id: "mode-online-multiplayer",
    label: "Multiplayer online",
    type: { label: "Modo de jogo" },
  },
];
