import { ReactNode } from "react";
import { FranchiseAsideNav } from "@/modules/franchise";

type Props = {
  children: ReactNode;
};

export default function FranchisesLayout({ children }: Props) {
  return (
    <div>
      <FranchiseAsideNav />

      <main>{children}</main>
    </div>
  );
}
