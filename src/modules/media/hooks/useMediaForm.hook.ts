"use client";

import { useState } from "react";
import type { MediaTypeCode } from "@/modules/media-type/types";
import type { CreateMediaCharacterInput } from "@/modules/media-character/types";
import type { CreateMediaFileInput } from "@/modules/media-file/types";
import { INITIAL_MEDIA_INPUT } from "@/modules/media/consts";
import { createMediaAction } from "@/modules/media/actions";
import type { CreateMediaInput } from "@/modules/media/types";

export function useMediaForm(typeCode: MediaTypeCode) {
  const [mediaInput, setMediaInput] = useState<CreateMediaInput>({
    ...INITIAL_MEDIA_INPUT,
    typeCode,
  });

  const handleChange = <K extends keyof CreateMediaInput>(
    name: K,
    value: CreateMediaInput[K],
  ) => {
    setMediaInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleUpdateCharactersList = (character: CreateMediaCharacterInput) => {
    setMediaInput((prev) => {
      const exists = prev.characters.some(
        (item) => item.name === character.name,
      );

      return {
        ...prev,
        characters: exists
          ? prev.characters.map((item) =>
              item.name === character.name ? character : item,
            )
          : [...prev.characters, character],
      };
    });
  };

  const handleAddMediaFile = (file: CreateMediaFileInput) => {
    setMediaInput((prev) => ({
      ...prev,
      files: [...prev.files, file],
    }));
  };

  const handleRemoveMediaFile = (index: number) => {
    setMediaInput((prev) => ({
      ...prev,
      files: prev.files.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    formData.set(
      "characters",
      JSON.stringify(
        mediaInput.characters.map(({ image, ...character }) => ({
          ...character,
          hasImage: image !== null,
        })),
      ),
    );

    mediaInput.characters.forEach((character, index) => {
      if (character.image) {
        formData.append(`characterImage_${index}`, character.image);
      }
    });

    formData.set(
      "files",
      JSON.stringify(
        mediaInput.files.map(({ name }, index) => ({
          name,
          fieldName: `mediaFile_${index}`,
        })),
      ),
    );

    mediaInput.files.forEach(({ file }, index) => {
      formData.append(`mediaFile_${index}`, file);
    });

    await createMediaAction(formData);
  };

  return {
    handleSubmit,
    mediaInput,
    handleChange,
    handleUpdateCharactersList,
    setMediaInput,
    handleAddMediaFile,
    handleRemoveMediaFile,
  };
}
