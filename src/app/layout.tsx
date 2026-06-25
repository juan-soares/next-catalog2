/**
 * Layout raiz da aplicação.
 * Define a estrutura compartilhada entre todas as páginas do CATFLIX.
 */

import type { ReactNode } from "react";
import { Header } from "@/components/layout";

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
