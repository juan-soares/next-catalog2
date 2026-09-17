import {
  CATALOG_ATTRIBUTES_NEW_PATH,
  CATALOG_FRANCHISES_NEW_PATH,
} from "@/shared/consts";
import { getAttributeFilters } from "@/modules/attribute";
import { getChildlessFranchises } from "@/modules/franchise";
import { MediaTypeFilterGroup } from "@/modules/media-type/components";

type Props = {
  isAdmin: boolean;
};

export async function MediaTypeFilters({ isAdmin }: Props) {
  const attributeFilters = await getAttributeFilters();
  const franchises = await getChildlessFranchises();

  return (
    <div>
      <h2>Filtros</h2>

      {attributeFilters.map(({ label, code, options }) => (
        <MediaTypeFilterGroup
          key={code}
          isAdmin={isAdmin}
          title={label}
          name={`${code}Id`}
          options={options}
          addHref={CATALOG_ATTRIBUTES_NEW_PATH}
        />
      ))}

      <MediaTypeFilterGroup
        isAdmin={isAdmin}
        title="Franquias"
        name="franchiseId"
        options={franchises.map(({ id, title }) => ({ id, label: title }))}
        addHref={CATALOG_FRANCHISES_NEW_PATH}
      />

      <MediaTypeFilterGroup
        isAdmin={isAdmin}
        title="Adquirido"
        name="acquired"
        options={[
          { id: "true", label: "Sim" },
          { id: "false", label: "Não" },
        ]}
      />

      <MediaTypeFilterGroup
        isAdmin={isAdmin}
        title="Consumido"
        name="consumed"
        options={[
          { id: "true", label: "Sim" },
          { id: "false", label: "Não" },
        ]}
      />
    </div>
  );
}
