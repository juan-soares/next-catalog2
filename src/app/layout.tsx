
import type { ReactNode } from "react";
import { Header } from "@/shared/components/layout";

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
