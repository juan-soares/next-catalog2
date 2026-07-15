import type { ComponentType } from "react";
import type { AttributeOptionsProvider } from "./attribute-options-provider.type";
import type { AttributeAdminProvider } from "./attribute-admin-provider.type";

export type AttributeDefinition<TEntity> = {
  key: string;
  slug: string;
  label: string;

  optionsProvider: AttributeOptionsProvider;

  admin: {
    provider: AttributeAdminProvider<TEntity>;

    create: ComponentType;
    edit: ComponentType<{
      attribute: TEntity;
    }>;
    delete: (formData: FormData) => Promise<void>;
  };
};

export type AnyAttributeDefinition = AttributeDefinition<any>;
