import { notFound } from "next/navigation";
import { getMediaTypeBySlug, MediaTypeSidebar } from "@/modules/media-type";
import { isAdminUser } from "@/modules/auth";

type Props = {
  params: Promise<{ type: string }>;
};

export default async function MediaTypePage({ params }: Props) {
  const { type } = await params;
  const mediaTypeInfo = getMediaTypeBySlug(type);
  const isAdmin = await isAdminUser();

  if (!mediaTypeInfo) {
    notFound();
  }

  return (
    <div>
      <h1>{mediaTypeInfo.label}</h1>

      <MediaTypeSidebar isAdmin={isAdmin} typeInfo={mediaTypeInfo}/>
    </div>
  );
}
