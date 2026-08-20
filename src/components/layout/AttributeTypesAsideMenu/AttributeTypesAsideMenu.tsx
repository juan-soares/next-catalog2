import { getAttributeTypes } from "@/modules/attribute-type";

export function AttributeTypesAsideMenu() {
  const attributeTypes = getAttributeTypes({ orderBy: "label", order: "asc" });

  return (
    <aside>
      <form method="GET">
        {attributeTypes.map(({ slug, label }) => (
          <button key={slug} type="submit" name="type" value={slug}>
            {label}
          </button>
        ))}
      </form>
    </aside>
  );
}
