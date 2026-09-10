import { FranchiseLogoLink } from "@/modules/franchise/types";

export type FranchiseFamily = {
  parent: FranchiseLogoLink;
  children: FranchiseLogoLink[];
};
