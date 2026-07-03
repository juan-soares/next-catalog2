"use client";

import type { FilterDefinition } from "@/modules/catalog/types/filter-definition.type";
import { useEffect, useState } from "react";

type Props = {
  filter: FilterDefinition;
  onSelect: (key: string, value: string) => void;
};

export function FilterOptions({ filter, onSelect }: Props) {
  const [options, setOptions] = useState<{ value: string; label: string }[]>(
    [],
  );

  useEffect(() => {
    filter.getOptions().then(setOptions);
  }, [filter]);

  return (
    <div>
      {options.map((opt) => (
        <button key={opt.value} onClick={() => onSelect(filter.key, opt.value)}>
          {opt.label}
        </button>
      ))}
    </div>
  );
}
