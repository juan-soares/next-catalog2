"use client";

import { useState } from "react";
import type { CreateMediaInputState } from "@/modules/media/types";
import { CREATE_MEDIA_INPUT_INITIAL_STATE } from "@/modules/media/consts";
import { createMediaAction } from "@/modules/media/actions";
import type { MediaTypeView } from "@/modules/media-type/types";

type Props = {
  mediaType: MediaTypeView;
};

export function useCreateMedia({ mediaType }: Props) {
  const [mediaInputs, setMediaInputs] = useState<CreateMediaInputState>({
    ...CREATE_MEDIA_INPUT_INITIAL_STATE,
    mediaTypeCode: mediaType.code,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value, type } = e.target;

    if (type === "radio") {
      setMediaInputs((prev) => ({
        ...prev,
        progress: {
          ...prev.progress,
          [name]: value === "true",
        },
      }));

      return;
    }

    setMediaInputs((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;

    const file = files?.[0] ?? null;

    setMediaInputs((prev) => ({
      ...prev,
      [name]: file,
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target;

    setMediaInputs((prev) => {
      const currentValues = prev[name as "languageIds" | "themeIds"];

      return {
        ...prev,
        [name]: checked
          ? [...currentValues, value]
          : currentValues.filter((item) => item !== value),
      };
    });
  };

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    await createMediaAction(mediaInputs);
  };

  return {
    mediaInputs,
    handleChange,
    handleCheckboxChange,
    handleFileChange,
    handleSubmit,
  };
}
