import { AttributesPageNavbar } from "@/modules/attribute-type";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div>
      <AttributesPageNavbar />
      <main>{children}</main>
    </div>
  );
}
