"use client";

import { Dispatch, SetStateAction, useState } from "react";
import { Check, Trash, X } from "lucide-react";
import {
  FormFileField,
  FormRadioField,
  FormSection,
  FormTextField,
} from "@/shared/components/Form";
import type { CreateMediaCharacterInput } from "@/modules/media-character/types";
import {
  INITIAL_CHARACTER_INPUT,
  MEDIA_CHARACTER_STATUS_LIST,
  MEDIA_CHARACTER_STATUS_REGISTRY,
} from "@/modules/media-character/consts";
import { MediaCharacterImagePreview } from "@/modules/media-character/components";

type Props = {
  characters: CreateMediaCharacterInput[];
  setCharacters: Dispatch<SetStateAction<CreateMediaCharacterInput[]>>;
};

export function CreateMediaCharacterForm({ characters, setCharacters }: Props) {
  const [character, setCharacter] = useState<CreateMediaCharacterInput>(
    INITIAL_CHARACTER_INPUT,
  );
  const [showForm, setShowForm] = useState<boolean>(false);

  const handleCloseForm = () => {
    setCharacter({ ...INITIAL_CHARACTER_INPUT });
    setShowForm(false);
  };

  const handleIncludeCharacter = () => {
    if (!character.name.trim()) return;

    setCharacters((prev) => [...prev, character]);
    handleCloseForm();
  };

  const handleRemoveCharacter = (indexToRemove: number) => {
    setCharacters((prev) => prev.filter((_, index) => index !== indexToRemove));
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
      <button type="button" onClick={() => setShowForm(true)}>
        Adicionar
      </button>

      <ul>
        {characters.map(({ statusCode, image, name, codenames }, index) => {
          const statusLabel = MEDIA_CHARACTER_STATUS_REGISTRY[statusCode].label;

          return (
            <li key={`${name}-${index}`}>
              <MediaCharacterImagePreview file={image} name={name} />
              <strong>{name}</strong>
              <p>Codinomes: {codenames}</p>
              <p>Status: {statusLabel}</p>
              <button
                type="button"
                onClick={() => handleRemoveCharacter(index)}
              >
                <Trash />
              </button>
            </li>
          );
        })}
      </ul>

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
            <button type="button" onClick={handleIncludeCharacter}>
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
