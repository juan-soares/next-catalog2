import { ReactNode } from "react";
import { AttributeTypesAsideMenu } from "@/modules/attribute-type";

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div>
      <AttributeTypesAsideMenu />
      {children}
    </div>
  );
}
