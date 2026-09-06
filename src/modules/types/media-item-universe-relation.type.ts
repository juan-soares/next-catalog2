export type MediaItemUniverseRelationTypeCode =
  | "canonical"
  | "alternate"
  | "non-canonical";

export type MediaItemUniverseRelationType = {
  code: MediaItemUniverseRelationTypeCode;
  label: string;
  slug: string;
};

export const UNIVERSE_RELATION_TYPES = {
  canonical: {
    code: "canonical",
    label: "Canônico",
    slug: "canonico",
  },
  alternate: {
    code: "alternate",
    label: "Alternativo",
    slug: "alternativo",
  },
  "non-canonical": {
    code: "non-canonical",
    label: "Não Canônico",
    slug: "nao-canonico",
  },
} satisfies Record<
  MediaItemUniverseRelationTypeCode,
  MediaItemUniverseRelationType
>;
