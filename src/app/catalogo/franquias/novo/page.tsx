import { FranchiseNewForm } from "@/modules/franchise/components";
import { getParentFranchises } from "@/modules/franchise/services";

export default async function NewFranchisePage() {
  const parentFranchises = await getParentFranchises();

  return (
    <div>
      <h1>Nova Franquia</h1>
      <FranchiseNewForm franchises={parentFranchises} />
    </div>
  );
}
