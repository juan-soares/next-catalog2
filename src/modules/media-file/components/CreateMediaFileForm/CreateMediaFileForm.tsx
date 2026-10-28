"use client";

import { useState } from "react";
import { FormSection } from "@/shared/components/Form";
import {
  CreateMediaFileInput,
  MediaFilewPreviewList,
} from "@/modules/media-file/components";

type Props = { files: File[] };

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
