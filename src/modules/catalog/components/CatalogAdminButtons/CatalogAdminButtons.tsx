import { DeleteButton } from "@/components/ui";

type Props = {
  identifier: string;
  deleteAction: (formData: FormData) => Promise<void>;
};

export function CatalogAdminButtons({ identifier, deleteAction }: Props) {
  return (
    <footer>
      <DeleteButton identifier={identifier} onDelete={deleteAction} />
    </footer>
  );
}
