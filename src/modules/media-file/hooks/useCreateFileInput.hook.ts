import { useState } from "react";
import { INITIAL_MEDIA_FILE_INPUT } from "../consts";
import { CreateMediaFileInput, MediaFileView } from "../types";

export function useCreateFileInput() {
  const [showingForm, setShowingForm] = useState<boolean>(false);
  const [file, setFile] = useState<CreateMediaFileInput>(
    INITIAL_MEDIA_FILE_INPUT,
  );
  const files: MediaFileView[] = [];

  const handleChange = <K extends keyof CreateMediaFileInput>(
    fieldName: K,
    value: CreateMediaFileInput[K],
  ) => {
    setFile((prev) => ({ ...prev, [fieldName]: value }));
  };

  const handleIncludeFile = () => {
    handleCloseForm();
  };

  const handleOpenForm = () => {
    setShowingForm(true);
  };

  const handleCloseForm = () => {
    setFile({ ...INITIAL_MEDIA_FILE_INPUT });
    setShowingForm(false);
  };

  return { showingForm, handleOpenForm, handleChange, handleIncludeFile, handleCloseForm };
}
