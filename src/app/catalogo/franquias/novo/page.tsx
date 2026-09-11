import {
  FranchiseNewForm,
  getParentFranchiseLogoLinks,
} from "@/modules/franchise";

export default async function NewFranchisePage() {
  const parentFranchises = await getParentFranchiseLogoLinks();

  return (
    <div>
      <h1>Nova Franquia</h1>
      <FranchiseNewForm parentFranchises={parentFranchises} />
    </div>
  );
}
