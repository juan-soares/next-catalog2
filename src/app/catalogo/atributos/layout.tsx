import { AttributesPageNavbar } from "@/modules/attribute-type";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function AttributesLayout({ children }: Props) {
  return (
    <div>
      <aside>
        <AttributesPageNavbar />
      </aside>

      <main>{children}</main>
    </div>
  );
}
