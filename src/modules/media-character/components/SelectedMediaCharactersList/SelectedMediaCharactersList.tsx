import { Trash } from "lucide-react";
import type { CreateMediaCharacterInput } from "@/modules/media-character/types";
import { MEDIA_CHARACTER_STATUS_REGISTRY } from "@/modules/media-character/consts";
import { MediaCharacterImagePreview } from "@/modules/media-character/components";

type Props = {
  selectedCharacters: CreateMediaCharacterInput[];
  onRemove: (index: number) => void;
};

export function SelectedMediaCharactersList({
  selectedCharacters,
  onRemove,
}: Props) {
  return (
    <ul>
      {selectedCharacters.map((character, index) => {
        const statusLabel =
          MEDIA_CHARACTER_STATUS_REGISTRY[character.statusCode].label;

        return (
          <li key={`${character.name}-${index}`}>
            <MediaCharacterImagePreview
              file={character.image}
              name={character.name}
            />

            <strong>{character.name}</strong>

            <p>Codinomes: {character.codenames || "Nenhum"}</p>
            <p>Status: {statusLabel}</p>

            <button
              type="button"
              onClick={() => onRemove(index)}
              aria-label={`Remover ${character.name}`}
            >
              <Trash aria-hidden="true" />
            </button>
          </li>
        );
      })}
    </ul>
  );
}
