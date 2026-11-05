import Link from "next/link";
import { PlusCircle } from "lucide-react";
import { PUBLIC_URLS } from "@/shared/consts";

export default function AttributesPage() {
  return (
    <div>
      <Link href={PUBLIC_URLS.ATTRIBUTES.CREATE}>
        <PlusCircle />
      </Link>
    </div>
  );
}
