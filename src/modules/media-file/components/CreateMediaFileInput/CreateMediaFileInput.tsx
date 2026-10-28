"use client";

import { Check, X } from "lucide-react";
import { FormFileField } from "@/shared/components/Form";
import { useMediaFileForm } from "@/modules/media-file/hooks";
import type { CreateMediaFileInput } from "@/modules/media-file/types";

type Props = {
  onConfirm: (file: CreateMediaFileInput) => void;
  onCancel: () => void;
};

export function CreateMediaFileInput({ onConfirm, onCancel }: Props) {
  const {
    fileInput,
    handleChange,
    handleFileChange,
    handleIncludeMediaFile,
    handleResetMediaFileInput,
  } = useMediaFileForm();

  const handleConfirm = () => {
    const file = handleIncludeMediaFile();

    if (!file) return;

    onConfirm(file);
    handleResetMediaFileInput();
  };

  return (
    <div>
      <label htmlFor="file-name">Título:</label>

      <input
        id="file-name"
        type="text"
        name="name"
        value={fileInput.name}
        onChange={handleChange}
      />

      <FormFileField
        fieldName="file"
        label="Escolher arquivo"
        fileType={["image/jpeg", "image/png", "video/mp4", ".pdf"]}
        onChange={(files) => handleFileChange(files?.item(0) ?? null)}
      />

      <button type="button" onClick={handleConfirm}>
        <Check />
        Adicionar
      </button>

      <button type="button" onClick={onCancel}>
        <X />
        Cancelar
      </button>
    </div>
  );
}
