import { AttributeNewForm } from "@/modules/attribute";
import { requireAdmin } from "@/modules/auth";

export default async function NewAttributeItemPage() {
  await requireAdmin();

  return (
    <div>
      <h2>Novo Atributo</h2>
      <AttributeNewForm />
    </div>
  );
}
