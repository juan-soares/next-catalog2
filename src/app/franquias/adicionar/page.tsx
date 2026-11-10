import { CreateFranchiseForm } from "@/modules/franchise/components";
import { getFranchises } from "@/modules/franchise/services";

export default async function CreateFranchisePage() {
  const franchises = await getFranchises();

  return (
    <div>
      <h1>Adicionar Franquia</h1>

      <CreateFranchiseForm franchises={franchises} />
    </div>
  );
}
