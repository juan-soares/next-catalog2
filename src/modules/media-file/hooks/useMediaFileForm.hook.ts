"use client";

import { useState } from "react";
import type { CreateMediaFileInput } from "@/modules/media-file/types";
import { CREATE_MEDIA_FILE_INITIAL_INPUT_STATE } from "@/modules/media-file/consts";

export function useMediaFileForm() {
  const [fileInput, setFileInput] = useState<CreateMediaFileInput>({
    ...CREATE_MEDIA_FILE_INITIAL_INPUT_STATE,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilInput((prev) => ({
      ...prev,
      name: e.target.value,
    }));
  };

  const handleFileChange = (file: File | null) => {
    setFilInput((prev) => ({
      ...prev,
      file,
    }));
  };

  const handleResetMediaFileInput = () => {
    setFileInput({ ...INITIAL_MEDIA_FILE_INPUT });
  };

  const handleIncludeMediaFile = (): CreateMediaFileInput | null => {
    const name = filInput.name.trim();

    return {
      name,
      file: filInput.file,
    };
  };

  return {
    filInput,
    handleChange,
    handleFileChange,
    handleIncludeMediaFile,
    handleResetMediaFileInput,
  };
}
