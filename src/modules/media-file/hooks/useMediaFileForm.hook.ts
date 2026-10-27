"use client";

import { useState } from "react";
import { CreateMediaFileInput } from "../types";
import { INITIAL_MEDIA_FILE_INPUT } from "../consts";

export function useMediaFileForm() {
  const [showForm, setShowForm] = useState<boolean>(false);
  const [filInput, setFileInput] = useState<CreateMediaFileInput>(
    INITIAL_MEDIA_FILE_INPUT,
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFileInput((prev) => ({
      ...prev,
      [name]: value,
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

  const handleOpenMediaFileForm = () => {
    setShowForm(true);
  };

  const handleIncludeMediaFile = () => {
    handleCloseMediaFileForm();
  };

  const handleCloseMediaFileForm = () => {
    setShowForm(false);
    handleResetMediaFileInput();
  };

  return {
    showForm,
    filInput,
    handleChange,
    handleFileChange,
    handleIncludeMediaFile,
    handleOpenMediaFileForm,
    handleCloseMediaFileForm,
  };
}
