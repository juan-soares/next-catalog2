"use client";

import { Check, Cross } from "lucide-react";
import { FormFileField } from "@/shared/components/Form";
import { useMediaFileForm } from "@/modules/media-file/hooks";

export function CreateMediaFileInput() {
  const {
    filInput,
    handleChange,
    handleFileChange,
    handleIncludeMediaFile,
    handleCloseMediaFileForm,
  } = useMediaFileForm();

  return (
    <div>
      <label htmlFor="file-name">Título:</label>
      <input
        id="file-name"
        type="text"
        name="name"
        value={filInput.name}
        onChange={handleChange}
      />

      <FormFileField
        fieldName="file"
        label="Escolher arquivo"
        fileType={["image/jpeg", "image/png", "video/mp4", ".pdf"]}
        onChange={handleFileChange}
      />

      <button onClick={handleIncludeMediaFile}>
        <Check />
      </button>
      <button onClick={handleCloseMediaFileForm}>
        <Cross />
      </button>
    </div>
  );
}
