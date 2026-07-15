/**
 * O que este arquivo faz:
 * - Define o contrato das operações administrativas de um atributo.
 *
 * O que este arquivo NÃO faz:
 * - Não executa consultas.
 * - Não conhece banco.
 * - Não contém regras de negócio.
 */

export type AttributeAdminProvider<TEntity> = {
  findByValue(value: string): Promise<TEntity | null>;
};
