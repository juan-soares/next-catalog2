"use client";

import { Check, Cross } from "lucide-react";
import { FormFileField } from "@/shared/components/Form";
import { useCreateMediaFileInput } from "@/modules/media-file/hooks";

type Props = {
  setShowingForm: (arg: boolean) => void;
};

export function CreateMediaFileInput({ setShowingForm }: Props) {
  const { currentFileInput, handleChange, handleCloseForm } =
    useCreateMediaFileInput({
      setShowingForm,
    });

  return (
    <div>
      <label htmlFor="file-name">Título:</label>
      <input
        id="file-name"
        type="text"
        name="name"
        value={currentFileInput.name}
        onChange={(e) => handleChange("name", e.target.value)}
      />

      <FormFileField
        fieldName="file"
        label="Escolher arquivo"
        fileType={["image/jpeg", "image/png", "video/mp4", ".pdf"]}
        onChange={(files) => handleChange("file", files?.[0] ?? null)}
      />

      <button onClick={handleIncludeFile}>
        <Check />
      </button>
      <button onClick={handleCloseForm}>
        <Cross />
      </button>
    </div>
  );
}
