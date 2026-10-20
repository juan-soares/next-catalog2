"use client";

import { useState } from "react";
import { Check, X } from "lucide-react";
import {
  FormFileField,
  FormRadioField,
  FormSection,
  FormTextField,
} from "@/shared/components/Form";
import { CreateMediaCharacterInput } from "@/modules/media-character/types";
import { MEDIA_CHARACTER_STATUS_LIST } from "@/modules/media-character/consts";

export function CreateMediaCharacterForm() {
  const initialCharacterInput: CreateMediaCharacterInput = {
    name: "",
    codenames: "",
    statusCode: "active",
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

  const handleChange = <K extends keyof CreateMediaCharacterInput>(
    fieldName: K,
    value: CreateMediaCharacterInput[K],
  ) => {
    setCharacter((prev) => ({
      ...prev,
      [fieldName]: value,
    }));
  };

  return (
    <FormSection title="Personagens">
      <button type="button">Adicionar</button>

      {showForm && (
        <FormSection title="Novo Personagem">
          <FormTextField
            fieldName="name"
            label="Nome"
            value={character.name}
            onChange={handleChange}
            required
          />

          <FormTextField
            fieldName="codenames"
            label="Codinomes"
            value={character.codenames}
            onChange={handleChange}
          />

          <FormRadioField
            label="Status"
            fieldName="statusCode"
            options={MEDIA_CHARACTER_STATUS_LIST.map(({ code, label }) => ({
              value: code,
              label,
            }))}
            currentValue={character.statusCode}
            onChange={handleChange}
          />

          <FormFileField
            label="Escolher imagem"
            fieldName="image"
            fileType="image/jpeg"
            onChange={(files) => handleChange("image", files?.[0] ?? null)}
          />

          <div>
            <button type="button" onClick={handleSubmit}>
              <Check />
            </button>

            <button type="button" onClick={handleCloseForm}>
              <X />
            </button>
          </div>
        </FormSection>
      )}
    </FormSection>
  );
}
