import { CONTENT_STRUCTURE_REGISTRY, ContentStructureKey } from "../registries";
import type { MediaContentStructure } from "../types";

/**
 * Resolve uma estrutura de conteúdo em runtime
 */

export function resolveContentStructure(structures: MediaContentStructure[]) {
  return structures.map((structure) => {
    const key = structure.key as ContentStructureKey;

    const factory = CONTENT_STRUCTURE_REGISTRY[key];

    if (!factory) {
      throw new Error(`Content structure not registered: ${structure.key}`);
    }

    return {
      key,
      label: structure.label,
      order: structure.order,
      instance: factory(),
    };
  });
}
