"use client";

import { useState } from "react";
import { CHARACTER_STATUS } from "@/modules/1-media-item/consts";
import { CharacterStatus } from "../../../types/media-item-character-status.type";

type CharacterInput = {
  name: string;
  nickname: string;
  image: string;
  status: CharacterStatus;
};

const EMPTY_CHARACTER: CharacterInput = {
  name: "",
  nickname: "",
  image: "",
  status: "Ativo",
};

export function MediaItemCharacterFields() {
  const [characters, setCharacters] = useState<CharacterInput[]>([
    { ...EMPTY_CHARACTER },
  ]);

  function updateCharacter(
    index: number,
    field: keyof CharacterInput,
    value: string,
  ) {
    setCharacters((current) =>
      current.map((character, characterIndex) =>
        characterIndex === index
          ? {
              ...character,
              [field]: value,
            }
          : character,
      ),
    );
  }

  function addCharacter() {
    setCharacters((current) => [
      ...current,
      {
        ...EMPTY_CHARACTER,
      },
    ]);
  }

  function removeCharacter(index: number) {
    setCharacters((current) =>
      current.filter((_, characterIndex) => characterIndex !== index),
    );
  }

  return (
    <>
      <input
        type="hidden"
        name="characters"
        value={JSON.stringify(characters)}
      />

      {characters.map((character, index) => (
        <fieldset key={index}>
          <legend>Personagem {index + 1}</legend>

          <label htmlFor={`character-name-${index}`}>Nome:</label>

          <input
            id={`character-name-${index}`}
            type="text"
            value={character.name}
            onChange={(event) =>
              updateCharacter(index, "name", event.target.value)
            }
          />

          <label htmlFor={`character-nickname-${index}`}>Nickname:</label>

          <input
            id={`character-nickname-${index}`}
            type="text"
            value={character.nickname}
            onChange={(event) =>
              updateCharacter(index, "nickname", event.target.value)
            }
          />

          <label htmlFor={`character-image-${index}`}>Imagem:</label>

          <input
            id={`character-image-${index}`}
            type="text"
            value={character.image}
            onChange={(event) =>
              updateCharacter(index, "image", event.target.value)
            }
          />

          <label htmlFor={`character-status-${index}`}>Status:</label>

          <select
            id={`character-status-${index}`}
            value={character.status}
            onChange={(event) =>
              updateCharacter(
                index,
                "status",
                event.target.value as CharacterStatus,
              )
            }
          >
            {CHARACTER_STATUS.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>

          {characters.length > 1 && (
            <button type="button" onClick={() => removeCharacter(index)}>
              Remover
            </button>
          )}
        </fieldset>
      ))}

      <button type="button" onClick={addCharacter}>
        Adicionar personagem
      </button>
    </>
  );
}
