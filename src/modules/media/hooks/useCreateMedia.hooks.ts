"use client";

import { useState } from "react";
import type { CreateMediaInputState } from "@/modules/media/types";
import { CREATE_MEDIA_INPUT_INITIAL_STATE } from "@/modules/media/consts";
import { createMediaAction } from "@/modules/media/actions";
import type { MediaTypeView } from "@/modules/media-type/types";

type Props = {
  mediaType: MediaTypeView;
};

type AttributeArrayField =
  | "languageIds"
  | "themeIds"
  | "platformIds"
  | "genreIds"
  | "gameplayIds"
  | "modeIds";

export function useCreateMedia({ mediaType }: Props) {
  const [mediaInputs, setMediaInputs] = useState<CreateMediaInputState>({
    ...CREATE_MEDIA_INPUT_INITIAL_STATE,
    mediaTypeCode: mediaType.code,
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
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

    if (type === "number") {
      setMediaInputs((prev) => ({
        ...prev,
        [name]: value === "" ? "" : Number(value),
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

    const field = name as AttributeArrayField;

    setMediaInputs((prev) => {
      const currentValues = prev[field];

      return {
        ...prev,
        [field]: checked
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
