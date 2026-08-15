import { ReactNode } from "react";
import { AttributeTypesAsideMenu } from "@/modules/attribute-type";

type Props = {
  children: ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="pt-BR">
      <body>
        <AttributeTypesAsideMenu />
        {children}
      </body>
    </html>
  );
}
