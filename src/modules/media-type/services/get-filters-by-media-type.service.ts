import { MediaTypeCode, MediaTypeFilter } from "@/modules/media-type/types";

export function getFiltersByMediaType(
  typeCode: MediaTypeCode,
): MediaTypeFilter[] {
  return [
    {
      field: "languages",
      label: "Idiomas",
      options: [
        {
          id: "123",
          label: "PT-BR",
        },
      ],
    },
    {
      field: "resolutions",
      label: "Resoluções",
      options: [
        {
          id: "123",
          label: "1080p",
        },
      ],
    },
    {
      field: "themes",
      label: "Temáticas",
      options: [
        {
          id: "123",
          label: "Drama",
        },
      ],
    },
    {
      field: "platforms",
      label: "Plataformas",
      options: [
        {
          id: "123",
          label: "PC",
        },
      ],
    },
    {
      field: "genres",
      label: "Gêneros",
      options: [
        {
          id: "123",
          label: "Aventura",
        },
      ],
    },
    {
      field: "gameplay",
      label: "Gameplay",
      options: [
        {
          id: "123",
          label: "Linear",
        },
      ],
    },
    {
      field: "modes",
      label: "Modos",
      options: [
        {
          id: "123",
          label: "Co-Op",
        },
      ],
    },
    {
      field: "players",
      label: "Jogadores",
      options: [
        {
          id: "123",
          label: "1",
        },
      ],
    },
    {
      field: "franchises",
      label: "Franquias",
      options: [
        {
          id: "123",
          label: "x-men",
        },
      ],
    },
  ];
}
