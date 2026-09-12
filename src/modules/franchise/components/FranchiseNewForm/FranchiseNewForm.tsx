"use client";

import { useActionState } from "react";
import type { ActionState } from "@/shared/types";
import { FormSelect, FormSubmitBtn } from "@/shared/components/ui";
import type { FranchiseLogoLink } from "@/modules/franchise/types";
import { createFranchiseAction } from "@/modules/franchise/actions";

type Props = {
  parentFranchises: FranchiseLogoLink[];
};

const initialActionState: ActionState = {
  success: false,
};

export function FranchiseNewForm({ parentFranchises }: Props) {
  const [state, formAction] = useActionState(
    createFranchiseAction,
    initialActionState,
  );

  return (
    <form action={formAction}>
      <label htmlFor="title">Título:</label>
      <input type="text" id="title" name="title" required />

      <label htmlFor="translatedTitle">Título Traduzido:</label>
      <input type="text" id="translatedTitle" name="translatedTitle" />

      <label htmlFor="logo">Logo:</label>
      <input type="file" id="logo" name="logo" accept=".png" required />

      <FormSelect
        id="parent"
        name="parentFranchiseId"
        label="Pertence a:"
        options={parentFranchises}
      />

      <FormSubmitBtn />
    </form>
  );
}
