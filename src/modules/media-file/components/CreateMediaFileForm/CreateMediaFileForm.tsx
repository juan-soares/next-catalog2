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
  onAdd: (file: TCreateMediaFileInput) => void;
  onRemove: (index: number) => void;
};

export function CreateMediaFileForm({ files, onAdd, onRemove }: Props) {
  const [showForm, setShowForm] = useState(false);

  return (
    <FormSection title="Arquivos">
      <MediaFilewPreviewList files={files} onRemove={onRemove} />

      {!showForm && (
        <button onClick={() => setShowForm(true)}>Adicionar Arquivo</button>
      )}

      {showForm && (
        <CreateMediaFileInput
          onAdd={(file) => {
            onAdd(file);
            setShowForm(false);
          }}
          onCancel={() => setShowForm(false)}
        />
      )}
    </FormSection>
  );
}
