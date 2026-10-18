import { Trash } from "lucide-react";
import Image from "next/image";
import { Dispatch, SetStateAction, useState } from "react";

type CharacterInput = {
  name: string;
  codenames: string;
  status: string;
  image: File | null;
};

type Props = {
  initialCharacter: CharacterInput;
  characters: CharacterInput[];
  setCharacters: Dispatch<SetStateAction<CharacterInput[]>>;
};

export function CharacterInput({
  initialCharacter,
  characters,
  setCharacters,
}: Props) {
  const [character, setCharacter] = useState<CharacterInput>(initialCharacter);
  const [isShowingInputs, setIsShowingInputs] = useState(false);

  const handleAddCharacter = () => {
    if (character.name === "") return;
    if (!character.image) return;

    setCharacters((prev) => [...prev, character]);
    setCharacter(initialCharacter);
    setIsShowingInputs(false);
  };
  const handleRemoveCharacter = (index: number) => {
    setCharacters((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <fieldset>
      <legend>Personagens</legend>
      <button type="button" onClick={() => setIsShowingInputs(true)}>
        Adicionar
      </button>

      {isShowingInputs && (
        <div>
          <label htmlFor="character-name">Nome:</label>
          <input
            id="character-name"
            type="text"
            name="name"
            value={character.name}
            onChange={(e) =>
              setCharacter((prev) => ({ ...prev, name: e.target.value }))
            }
            required
          />

          <label htmlFor="character-codenames">Codinomes:</label>
          <input
            id="character-codenames"
            type="text"
            name="codenames"
            value={character.codenames}
            onChange={(e) =>
              setCharacter((prev) => ({ ...prev, codenames: e.target.value }))
            }
          />

          <label>Status:</label>
          <label>
            <input
              type="radio"
              value="active"
              name="status"
              checked={character.status === "active"}
              onChange={(e) =>
                setCharacter((prev) => ({ ...prev, status: e.target.value }))
              }
            />
            Ativo
          </label>
          <label>
            <input
              type="radio"
              value="dead"
              name="status"
              checked={character.status === "dead"}
              onChange={(e) =>
                setCharacter((prev) => ({ ...prev, status: e.target.value }))
              }
            />
            Morto
          </label>

          <label htmlFor="character-image">Imagem:</label>
          <input
            id="character-image"
            type="file"
            name="image"
            accept="image/jpeg,image/png"
            onChange={(e) =>
              setCharacter((prev) => ({
                ...prev,
                image: e.target.files?.[0] ?? null,
              }))
            }
          />

          <button type="button" onClick={handleAddCharacter}>
            OK
          </button>
          <button
            type="button"
            onClick={() => {
              setCharacter({
                name: "",
                codenames: "",
                status: "active",
                image: null,
              });
              setIsShowingInputs(false);
            }}
          >
            Cancelar
          </button>
        </div>
      )}

      <ul>
        {characters.map(({ image, name, codenames, status }, index) => (
          <li key={index}>
            <Image
              src={image ? URL.createObjectURL(image) : ""}
              alt={`Imagem de ${name}.`}
              width={60}
              height={60}
            />

            <div>
              <strong>{name}</strong>
              <p>Codinomes: {codenames}</p>
              <p>Status: {status}</p>
              <button
                type="button"
                onClick={() => handleRemoveCharacter(index)}
              >
                <Trash />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </fieldset>
  );
}
