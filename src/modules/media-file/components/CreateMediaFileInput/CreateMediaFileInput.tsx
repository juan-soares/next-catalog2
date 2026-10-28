"use client";

import { Check, X } from "lucide-react";
import { FormFileField } from "@/shared/components/Form";
import { useMediaFileForm } from "@/modules/media-file/hooks";
import type { CreateMediaFileInput } from "@/modules/media-file/types";

type Props = {
  onAdd: (file: CreateMediaFileInput) => void;
  onCancel: () => void;
};

export function CreateMediaFileInput({ onAdd, onCancel }: Props) {
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

    onAdd(file);
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
        onChange={handleFileChange}
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
