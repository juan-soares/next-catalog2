import { useState } from "react";
import {
  INITIAL_MEDIA_FILE_INPUT,
  INITIAL_MEDIA_FILE_PREVIEW,
} from "@/modules/media-file/consts";
import type {
  CreateMediaFileInput,
  MediaFilePreview,
  MediaFileView,
} from "@/modules/media-file/types";

type Props = {
  setShowingForm: (arg: boolean) => void;
};

export function useCreateMediaFileInput({ setShowingForm }: Props) {
  const [currentFileInput, setcurrentFileInput] =
    useState<CreateMediaFileInput>(INITIAL_MEDIA_FILE_INPUT);

  const handleChange = <K extends keyof CreateMediaFileInput>(
    fieldName: K,
    value: CreateMediaFileInput[K],
  ) => {
    setcurrentFileInput((prev) => ({ ...prev, [fieldName]: value }));
  };

  const handleIncludeFile = () => {
    handleCloseForm();
  };

  const handleOpenForm = () => {
    setShowingForm(true);
  };

  const handleCloseForm = () => {
    setMediaFilePreview({ ...INITIAL_MEDIA_FILE_PREVIEW });
    setShowingForm(false);
  };

  return {
    currentFileInput,
    handleChange,
    handleCloseForm,
  };
}
