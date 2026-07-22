/**
 * O que este arquivo faz
 * ----------------------
 * Resolve uma página através do MediaType informado
 * na URL e delega a renderização para o módulo responsável.
 *
 * O que este arquivo NÃO faz
 * --------------------------
 * - Não conhece domínios específicos.
 * - Não renderiza conteúdo de mídia.
 * - Não possui regras de negócio.
 * - Não acessa banco de dados.
 */

import { getMediaTypeBySlug } from "@/modules/media-type/";

type Props = {
  params: Promise<{
    mediaTypeSlug: string;
  }>;
};

export default async function MediaTypePage({ params }: Props) {
  const { mediaTypeSlug } = await params;
  const mediaType = getMediaTypeBySlug(mediaTypeSlug);

  const Page = mediaType.module.page;

  return <Page />;
}
