"use client";

import { useState } from "react";
import type { CreateMediaFileInput } from "@/modules/media-file/types";
import { INITIAL_MEDIA_FILE_INPUT } from "@/modules/media-file/consts";

export function useMediaFileForm() {
  const [filInput, setFileInput] = useState<CreateMediaFileInput>({
    ...INITIAL_MEDIA_FILE_INPUT,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name !== "name") return;

    setFileInput((prev) => ({
      ...prev,
      name: value,
    }));
  };

  const handleFileChange = (files: FileList | null) => {
    setFileInput((prev) => ({
      ...prev,
      file: files?.[0] ?? null,
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
