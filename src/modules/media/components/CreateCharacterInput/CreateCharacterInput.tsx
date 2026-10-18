import { Check, X } from "lucide-react";
import { useCreateCharacterInput } from "@/modules/media/hooks";
import { CreateCharacterInputImage } from "@/modules/media/components";

export function CreateCharacterInput() {
  const {
    showFields,
    toggleShowFields,
    handleSubmitFields,
    handleCloseFields,
    characterInput,
    handleChange,
    characters,
  } = useCreateCharacterInput();

  return (
    <fieldset>
      <legend>Personagens</legend>

      <button type="button" onClick={toggleShowFields}>
        Adicionar
      </button>

      {characters.map(({ name, codenames, status, image }) => (
        <li key={name}>
          {image && <CreateCharacterInputImage file={image} />}
          <strong>{name}</strong>
          <p>Codenomes: {codenames}</p>
          <p>Status: {status}</p>
        </li>
      ))}

      {showFields && (
        <div>
          <div>
            <label htmlFor="character-name">Nome:</label>
            <input
              id="character-name"
              type="text"
              name="name"
              value={characterInput.name}
              onChange={handleChange}
            />

            <label htmlFor="character-codenames">Codinomes:</label>
            <input
              id="character-codenames"
              type="text"
              name="codenames"
              value={characterInput.codenames}
              onChange={handleChange}
            />

            <label htmlFor="character-status">Status:</label>
            <label>
              <input
                type="radio"
                name="status"
                value="active"
                checked={characterInput.status === "active"}
                onChange={handleChange}
              />
              Ativo
            </label>
            <label>
              <input
                type="radio"
                name="status"
                value="dead"
                checked={characterInput.status === "dead"}
                onChange={handleChange}
              />
              Morto
            </label>

            <input
              type="file"
              name="file"
              accept="image/jpeg,image/png"
              onChange={handleChange}
            />
          </div>

          <div>
            <button type="button" onClick={handleSubmitFields}>
              <Check />
            </button>
            <button type="button" onClick={handleCloseFields}>
              <X />
            </button>
          </div>
        </div>
      )}
    </fieldset>
  );
}
