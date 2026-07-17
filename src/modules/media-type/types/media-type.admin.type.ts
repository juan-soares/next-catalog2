import { ComponentType } from "react";

export type MediaTypeAdmin = {
  createForm: ComponentType;
  editForm: ComponentType;

  createAction: (formData: FormData) => Promise<void>;
  updateAction: (formData: FormData) => Promise<void>;
  deleteAction: (formData: FormData) => Promise<void>;
};
