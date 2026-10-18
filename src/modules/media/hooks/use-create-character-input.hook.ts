"use client";

import { ChangeEvent, useState } from "react";

type MediaCharacterInput = {
  name: string;
  codenames: string;
  status: string;
  image: File | null;
};

const initialCharacterInput: MediaCharacterInput = {
  name: "",
  codenames: "",
  status: "active",
  image: null,
};

export function useCreateCharacterInput() {
  const [characterInput, setCharacterInput] = useState<MediaCharacterInput>(
    initialCharacterInput,
  );
  const [showFields, setShowFields] = useState<boolean>(false);
  const [characters, setCharacters] = useState<MediaCharacterInput[]>([]);

  const toggleShowFields = () => setShowFields((prev) => !prev);

  const handleCloseFields = () => {
    setCharacterInput({ ...initialCharacterInput });
    setShowFields(false);
  };

  const handleSubmitFields = () => {
    console.log(characterInput);
    if (
      !characterInput.name.trim() ||
      !characterInput.status ||
      !characterInput.image
    )
      return;
    setCharacters((prev) => [...prev, characterInput]);
    handleCloseFields();
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;

    if (name === "image") {
      setCharacterInput((prev) => ({
        ...prev,
        image: files?.[0] ?? null,
      }));

      return;
    }

    setCharacterInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return {
    showFields,
    toggleShowFields,
    handleSubmitFields,
    handleCloseFields,
    characterInput,
    handleChange,
    characters,
  };
}
