import { getParentFranchiseLogoLinks } from "@/modules/franchise";

type Props = {
  searchParams: Promise<{ q: string }>;
};

export default async function FranchisesPage({ searchParams }: Props) {
  const { q } = await searchParams;
  const franchiseLinks = await getParentFranchiseLogoLinks();

  return <div></div>;
}
