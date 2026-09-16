import { FranchiseNewForm, getChildlessFranchises } from "@/modules/franchise";

export default async function NewFranchisePage() {
  const parentFranchises = await getChildlessFranchises();

  return (
    <div>
      <h1>Nova Franquia</h1>
      <FranchiseNewForm franchises={parentFranchises} />
    </div>
  );
}
