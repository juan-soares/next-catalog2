"use client";

import { useState } from "react";
import type { CreateMediaInputState } from "@/modules/media/types";
import { CREATE_MEDIA_INPUT_INITIAL_STATE } from "@/modules/media/consts";
import { createMediaAction } from "@/modules/media/actions";
import type { MediaTypeCode } from "@/modules/media-type/types";

type Props = {
  mediaTypeCode: MediaTypeCode | null;
};

export function useCreateMedia({ mediaTypeCode }: Props) {
  const [mediaInputs, setMediaInputs] = useState<CreateMediaInputState>({
    ...CREATE_MEDIA_INPUT_INITIAL_STATE,
    mediaTypeCode,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setMediaInputs((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;

    const file = files?.[0] ?? null;

    setMediaInputs((prev) => ({
      ...prev,
      [name]: file,
    }));
  };

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    await createMediaAction(mediaInputs);
  };

  return { mediaInputs, handleChange, handleFileChange, handleSubmit };
}
