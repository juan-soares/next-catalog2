"use client";

import { useState } from "react";
import { CREATE_MEDIA_FILE_INITIAL_INPUT_STATE } from "@/modules/media-file/consts";
import type {
  CreateMediaFileInput,
  CreateMediaFileInputState,
} from "@/modules/media-file/types";

export function useMediaFileForm() {
  const [fileInput, setFileInput] = useState<CreateMediaFileInputState>({
    ...CREATE_MEDIA_FILE_INITIAL_INPUT_STATE,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFileInput((prev) => ({
      ...prev,
      name: e.target.value,
    }));
  };

  const handleFileChange = (file: File | null) => {
    setFileInput((prev) => ({
      ...prev,
      file,
    }));
  };

  const handleResetMediaFileInput = () => {
    setFileInput({ ...CREATE_MEDIA_FILE_INITIAL_INPUT_STATE });
  };

  const handleIncludeMediaFile = (): CreateMediaFileInput | null => {
    const name = fileInput.name.trim();

    if (!fileInput.file) return null;

    return {
      name,
      file: fileInput.file,
    };
  };

  return {
    fileInput,
    handleChange,
    handleFileChange,
    handleIncludeMediaFile,
    handleResetMediaFileInput,
  };
}
