"use client";

import { useState } from "react";
import type { CreateMediaInputState } from "@/modules/media/types";
import { CREATE_MEDIA_INPUT_INITIAL_STATE } from "@/modules/media/consts";

export function useCreateMedia() {
  const [mediaInputs, setMediaInputs] = useState<CreateMediaInputState>(
    CREATE_MEDIA_INPUT_INITIAL_STATE,
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setMediaInputs((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(mediaInputs);
  };

  return { mediaInputs, handleChange, handleSubmit };
}
