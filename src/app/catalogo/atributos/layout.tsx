import { ReactNode } from "react";
import { AttributeTypesNavbar } from "@/modules/attribute";

type Props = {
  children: ReactNode;
};

export default function AttributesLayout({ children }: Props) {
  return (
    <div>
      <aside>
        <AttributeTypesNavbar />
      </aside>

      <main>{children}</main>
    </div>
  );
}
