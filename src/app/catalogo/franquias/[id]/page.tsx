import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  CATALOG_FRANCHISES_EDIT_PATH,
  CATALOG_MEDIAS_PATH,
  FRANCHISES_LOGO_PATH,
} from "@/shared/consts";
import { DeleteFormButton, EditButton } from "@/shared/components/ui";
import { isAdminUser } from "@/modules/auth";
import { MediaCard } from "@/modules/media";
import { deleteFranchiseAction, getFranchiseById } from "@/modules/franchise";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function FranchisePage({ params }: Props) {
  const { id } = await params;
  const franchiseInfo = await getFranchiseById(id);
  const isAdmin = await isAdminUser();
  const universes = [];
  const medias = [];

  if (!franchiseInfo) {
    notFound();
  }

  const {
    title,
    translatedTitle,
    logo: { fileName },
  } = franchiseInfo;

  return (
    <div>
      <aside>
        <Image
          src={FRANCHISES_LOGO_PATH + fileName}
          alt={`Logo da franquia ${title}.`}
          width={60}
          height={60}
        />
      </aside>

      <main>
        <div>
          <header>
            <h1>{title}</h1>

            <div>
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
            </div>
          </header>

          <div>
            <p>
              <strong>Título:</strong> {title}
            </p>
            <p>
              <strong>Título Traduzido:</strong> {translatedTitle}
            </p>
          </div>

          <p>
            <strong>Mídias:</strong>
          </p>
          <div>
            {medias.map((media) => (
              <li key={media.id}>
                <MediaCard {...media} />
              </li>
            ))}
            {isAdmin && (
              <div>
                <Link href={CATALOG_MEDIAS_PATH}>Adicionar</Link>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
