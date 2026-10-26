"use client";

import { useState } from "react";
import { FormSection } from "@/shared/components/Form";
import {
  CreateMediaFileInput,
  MediaFilewPreviewList,
} from "@/modules/media-file/components";
import type { CreateMediaFileInput as ICreateMediaFileInput } from "@/modules/media-file/types";

type Props = {
  mediaFileInputList: ICreateMediaFileInput[];
  onMediaFileChange: () => void;
};

export function CreateFileForm({
  mediaFileInputList,
  onMediaFileChange,
}: Props) {
  const [showingForm, setShowingForm] = useState<boolean>(false);

  return (
    <FormSection title="Arquivos">
      {!showingForm && (
        <button onClick={() => setShowingForm(true)}>Adicionar Arquivo</button>
      )}

      <MediaFilewPreviewList files={[]} />

      {showingForm && <CreateMediaFileInput setShowingForm={setShowingForm} />}
    </FormSection>
  );
}
