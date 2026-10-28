"use client";

import { useState } from "react";
import { FormSection } from "@/shared/components/Form";
import {
  CreateMediaFileInput,
  MediaFilewPreviewList,
} from "@/modules/media-file/components";
import type { CreateMediaFileInput as TCreateMediaFileInput } from "@/modules/media-file/types";

type Props = {
  files: TCreateMediaFileInput[];
  onInclude: (file: TCreateMediaFileInput) => void;
  onRemove: (index: number) => void;
};

export function CreateMediaFileForm({ files, onInclude, onRemove }: Props) {
  const [showForm, setShowForm] = useState(false);

  const handleAdd = (file: TCreateMediaFileInput) => {
    onInclude(file);
    setShowForm(false);
  };

  const handleCancel = () => {
    setShowForm(false);
  };

  return (
    <FormSection title="Arquivos">
      <MediaFilewPreviewList files={files} onRemove={onRemove} />

      {!showForm && (
        <button type="button" onClick={() => setShowForm(true)}>
          Adicionar Arquivo
        </button>
      )}

      {showForm && (
        <CreateMediaFileInput onConfirm={handleAdd} onCancel={handleCancel} />
      )}
    </FormSection>
  );
}
