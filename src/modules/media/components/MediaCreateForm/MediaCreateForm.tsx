"use client";

import { useCreateMedia } from "@/modules/media/hooks";
import { InfoFields } from "@/modules/media/components/MediaCreateForm/components";

export function MediaCreateForm() {
  const { mediaInputs, handleChange, handleSubmit } = useCreateMedia();

  return (
    <form onSubmit={handleSubmit}>
      <InfoFields mediaInputs={mediaInputs} onChange={handleChange} />

      <button type="submit">Enviar</button>
    </form>
  );
}
