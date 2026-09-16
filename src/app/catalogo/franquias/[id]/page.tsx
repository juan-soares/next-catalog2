import Image from "next/image";
import { notFound } from "next/navigation";
import {
  CATALOG_FRANCHISES_EDIT_PATH,
  FRANCHISES_LOGO_PATH,
} from "@/shared/consts";
import { DeleteFormButton, EditButton } from "@/shared/components/ui";
import { isAdminUser } from "@/modules/auth";
import { deleteFranchiseAction, getFranchiseById } from "@/modules/franchise";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function FranchisePage({ params }: Props) {
  const { id } = await params;
  const franchiseInfo = await getFranchiseById(id);
  const isAdmin = await isAdminUser();

  if (!franchiseInfo) {
    notFound();
  }

  const {
    title,
    logo: { fileName },
  } = franchiseInfo;

  return (
    <div>
      <div>
        <Image
          src={FRANCHISES_LOGO_PATH + fileName}
          alt={`Logo da franquia ${title}.`}
          width={60}
          height={60}
        />

        {isAdmin && (
          <div>
            <EditButton
              path={CATALOG_FRANCHISES_EDIT_PATH + id}
              label="franquia"
            />
            <DeleteFormButton
              deleteAction={deleteFranchiseAction}
              fields={{ id }}
            />
          </div>
        )}
        <div>
          <h1></h1>
        </div>
      </div>
    </div>
  );
}
