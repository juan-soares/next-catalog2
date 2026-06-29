export function buildMongoFilters(filters?: Record<string, string[]>) {
  if (!filters) return {};

  const mongoFilters: Record<string, any> = {};

  for (const key in filters) {
    const values = filters[key];

    if (!values?.length) continue;

    mongoFilters[`attributes.${key}`] = {
      $in: values,
    };
  }

  return mongoFilters;
}
