import { ReactNode } from "react";

type Props = {
  title: string;
  children: ReactNode;
};

export function FormSection({ title, children }: Props) {
  return (
    <fieldset>
      <legend>{title}</legend>
      {children}
    </fieldset>
  );
}
