import { CreateFranchiseForm, getParentFranchises } from "@/modules/franchise";

export default async function CreateFranchisePage() {
  const parentFranchises = await getParentFranchises();

  return (
    <div>
      <h1>Adicionar Franquias</h1>
      <CreateFranchiseForm parentFranchises={parentFranchises} />
    </div>
  );
}
