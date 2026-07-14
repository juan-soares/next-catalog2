/**
 * O que este arquivo faz:
 * - Renderiza a lista de atributos disponíveis na administração.
 * - Usa o registry como fonte dos atributos existentes.
 *
 * O que este arquivo NÃO faz:
 * - Não conhece atributos específicos.
 * - Não acessa banco.
 * - Não executa consultas.
 * - Não contém regras de criação.
 */

import Link from "next/link";
import {} from "@/modules/attributes";
import { ATTRIBUTE_LINKS } from "@/modules/attributes";

export default function AttributesPage() {
  return (
    <main>
      <h1>Atributos</h1>

      <ul>
        {ATTRIBUTE_LINKS.map(({ label, href }) => (
          <li key={href}>
            <Link href={href}>{label}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
