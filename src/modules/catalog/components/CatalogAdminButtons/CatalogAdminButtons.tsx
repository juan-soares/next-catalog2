import { FormActionButton } from "@/components/ui";

type Props = {
  identifier: string;
  deleteAction: (formData: FormData) => Promise<void>;
};

export function CatalogAdminButtons({ identifier, deleteAction }: Props) {
  return (
    <footer>
      <FormActionButton
        label="Remover"
        confirmationMessage="Deseja realmente excluir?"
        identifier={identifier}
        action={deleteAction}
      />
    </footer>
  );
}
