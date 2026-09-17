import { notFound } from "next/navigation";
import { isAdminUser } from "@/modules/auth";
import {
  getMediaTypeBySlug,
  MediaTypeList,
  MediaTypeSidebar,
} from "@/modules/media-type";

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

      <MediaTypeSidebar isAdmin={isAdmin} typeInfo={mediaTypeInfo} />
      <MediaTypeList />
    </div>
  );
}
