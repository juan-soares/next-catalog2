import type { Attribute } from "@/modules/attribute/types";

export const ATTRIBUTES_MOCK: Attribute[] = [
  // Languages
  { id: "language-pt-br", label: "Português", typeCode: "language" },
  { id: "language-en", label: "Inglês", typeCode: "language" },
  { id: "language-dubbed", label: "Dublado", typeCode: "language" },
  { id: "language-subtitled", label: "Legendado", typeCode: "language" },

  // Resolutions
  { id: "resolution-720p", label: "720p", typeCode: "resolution" },
  { id: "resolution-1080p", label: "1080p", typeCode: "resolution" },
  { id: "resolution-4k", label: "4K", typeCode: "resolution" },

  // Themes
  { id: "theme-action", label: "Ação", typeCode: "theme" },
  { id: "theme-adventure", label: "Aventura", typeCode: "theme" },
  { id: "theme-drama", label: "Drama", typeCode: "theme" },
  {
    id: "theme-scifi",
    label: "Ficção científica",
    typeCode: "theme",
  },

  // Franchises
  { id: "franchise-naruto", label: "Naruto", typeCode: "franchise" },
  {
    id: "franchise-spiderman",
    label: "Homem-Aranha",
    typeCode: "franchise",
  },
  {
    id: "franchise-the-sims",
    label: "The Sims",
    typeCode: "franchise",
  },

  // Platforms
  { id: "platform-pc", label: "PC", typeCode: "platform" },
  {
    id: "platform-playstation-5",
    label: "PlayStation 5",
    typeCode: "platform",
  },
  {
    id: "platform-xbox-series",
    label: "Xbox Series X|S",
    typeCode: "platform",
  },
  {
    id: "platform-switch",
    label: "Nintendo Switch",
    typeCode: "platform",
  },

  // Genres
  { id: "genre-simulation", label: "Simulação", typeCode: "genre" },
  { id: "genre-rpg", label: "RPG", typeCode: "genre" },
  { id: "genre-action", label: "Ação", typeCode: "genre" },
  { id: "genre-adventure", label: "Aventura", typeCode: "genre" },

  // Gameplay
  {
    id: "gameplay-open-world",
    label: "Mundo aberto",
    typeCode: "gameplay",
  },
  {
    id: "gameplay-building",
    label: "Construção",
    typeCode: "gameplay",
  },
  {
    id: "gameplay-life-simulation",
    label: "Simulação de vida",
    typeCode: "gameplay",
  },

  // Modes
  {
    id: "mode-single-player",
    label: "Um jogador",
    typeCode: "mode",
  },
  {
    id: "mode-local-multiplayer",
    label: "Multiplayer local",
    typeCode: "mode",
  },
  {
    id: "mode-online-multiplayer",
    label: "Multiplayer online",
    typeCode: "mode",
  },
];
