"use client";

import { useState } from "react";
import { Check, X } from "lucide-react";
import {
  FormSection,
  FormSelectField,
  FormTextField,
} from "@/shared/components/Form";
import { MEDIA_CHARACTER_STATUS_LIST } from "@/modules/media-character/consts";

export function CreateMediaCharacterForm() {
  const initialCharacterInput = {
    name: "",
    codenames: "",
    status: "active",
    image: null,
  };
  const [character, setCharacter] = useState(initialCharacterInput);
  const [showForm, setShowForm] = useState<boolean>(false);

  const handleCloseForm = () => {
    setCharacter({ ...initialCharacterInput });
    setShowForm(false);
  };

  const handleSubmit = () => {
    handleCloseForm();
  };

  return (
    <FormSection title="Personagens">
      <button type="button">Adicionar</button>

      {showForm && (
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={character.name}
            required
          />

          <label htmlFor="codenames">Codinomes:</label>
          <input
            type="text"
            id="codenames"
            name="codenames"
            value={character.codenames}
            required
          />

          <label>Status:</label>
          <label>
            <input
              type="radio"
              id="status"
              name="status"
              value={character.codenames}
              checked={character.status === "active"}
            />
            Ativo
          </label>
          <label>
            <input
              type="radio"
              id="status"
              name="status"
              value={character.codenames}
              checked={character.status === "dead"}
            />
            Morto
          </label>
          <label>
            <input
              type="radio"
              id="status"
              name="status"
              value={character.codenames}
              checked={character.status === "unknown"}
            />
            Desconhecido
          </label>

          <div>
            <button type="button" onChange={handleSubmit}>
              <Check />
            </button>

            <button type="button" onChange={handleCloseForm}>
              <X />
            </button>
          </div>
        </div>
      )}
    </FormSection>
  );
}
