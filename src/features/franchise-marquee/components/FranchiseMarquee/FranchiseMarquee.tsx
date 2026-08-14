import Link from "next/link";
import Image from "next/image";
import { FRANCHISE_LOGO_PATH, FRANCHISES_CATALOG_PATH } from "@/consts/paths";
import { getFranchiseMarqueeItems } from "../../services";

export async function FranchiseMarquee() {
  const franchises = await getFranchiseMarqueeItems();

  return (
    <ul>
      {franchises.map(({ id, slug, title, logo }) => (
        <li key={id}>
          <Link href={FRANCHISES_CATALOG_PATH + slug}></Link>
          <Image
            src={FRANCHISE_LOGO_PATH + logo}
            alt={`Logo da franquia ${title}`}
            width={60}
            height={60}
          />
          <p>{title}</p>
        </li>
      ))}
    </ul>
  );
}
