"use client";

import { Check, Cross, File } from "lucide-react";
import { FormFileField, FormSection } from "@/shared/components/Form";
import { useCreateFileInput } from "@/modules/media-file/hooks";

export function CreateFileForm() {
  const {
    showingForm,
    handleOpenForm,
    handleChange,
    handleIncludeFile,
    handleCloseForm,
  } = useCreateFileInput();

  return (
    <FormSection title="Arquivos">
      {!showingForm && (
        <button onClick={handleOpenForm}>Incluir Arquivo</button>
      )}

      <ul>
        {files.map(({ label, fileType, size }, index) => (
          <li key={index}>
            <File />
            <p>{`${label}.${fileType} - ${size} KB`}</p>
          </li>
        ))}
      </ul>

      {showingForm && (
        <div>
          <label htmlFor="file-name">Título:</label>
          <input
            id="file-name"
            type="text"
            name="name"
            value={file.name}
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
      )}
    </FormSection>
  );
}
