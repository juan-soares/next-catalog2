import { AttributeTypesNavbar } from "@/modules/attribute";
import { AttributesPageNavbar } from "@/modules1/attribute-type";
import { ReactNode } from "react";

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
