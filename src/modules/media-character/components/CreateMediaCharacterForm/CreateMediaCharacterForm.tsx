"use client";

import { useState } from "react";
import { Check, X } from "lucide-react";
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
} from "@/modules/media-character/consts";
import { SelectedMediaCharactersList } from "../SelectedMediaCharactersList";

type Props = {
  characters: CreateMediaCharacterInput[];
  onConfirm: (character: CreateMediaCharacterInput) => void;
  onRemove: (index: number) => void;
};

export function CreateMediaCharacterForm({
  characters,
  onConfirm,
  onRemove,
}: Props) {
  const [character, setCharacter] = useState<CreateMediaCharacterInput>({
    ...INITIAL_CHARACTER_INPUT,
  });

  const [showForm, setShowForm] = useState(false);

  const handleCloseForm = () => {
    setCharacter({ ...INITIAL_CHARACTER_INPUT });
    setShowForm(false);
  };

  const handleIncludeCharacter = () => {
    if (!character.name.trim()) return;

    onConfirm({
      ...character,
      name: character.name.trim(),
      codenames: character.codenames.trim(),
    });

    handleCloseForm();
  };

  const handleChange = <K extends keyof CreateMediaCharacterInput>(
    fieldName: K,
    value: CreateMediaCharacterInput[K],
  ) => {
    setCharacter((prev) => ({ ...prev, [fieldName]: value }));
  };

  return (
    <FormSection title="Personagens">
      <button
        type="button"
        onClick={() => setShowForm(true)}
        disabled={showForm}
      >
        Adicionar
      </button>

      {characters.length > 0 && (
        <SelectedMediaCharactersList
          selectedCharacters={characters}
          onRemove={onRemove}
        />
      )}

      {showForm && (
        <FormSection title="Novo personagem">
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
            fieldName="image"
            label="Escolher imagem"
            fileType={["image/jpeg"]}
            onChange={(files) => handleChange("image", files?.[0] ?? null)}
          />

          <div>
            <button
              type="button"
              onClick={handleIncludeCharacter}
              disabled={!character.name.trim()}
              aria-label="Confirmar personagem"
            >
              <Check aria-hidden="true" />
            </button>

            <button
              type="button"
              onClick={handleCloseForm}
              aria-label="Cancelar inclusão"
            >
              <X aria-hidden="true" />
            </button>
          </div>
        </FormSection>
      )}
    </FormSection>
  );
}
