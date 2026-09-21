function MediaInformation({ media }: { media: typeof mediaDetailsMock }) {
  return (
    <section>
      <h2>Ficha Técnica</h2>

      <dl>
        <div>
          <dt>Título</dt>
          <dd>{media.title}</dd>
        </div>

        <div>
          <dt>Título traduzido</dt>
          <dd>{media.translatedTitle ?? "—"}</dd>
        </div>

        <div>
          <dt>Lançamento</dt>
          <dd>{media.releaseYear}</dd>
        </div>

        <div>
          <dt>Tipo</dt>
          <dd>{media.type.label}</dd>
        </div>

        <div>
          <dt>Temas</dt>
          <dd>
            {media.themes.length > 0
              ? media.themes.map((theme) => theme.label).join(", ")
              : "—"}
          </dd>
        </div>
      </dl>
    </section>
  );
}
function MediaSeasons({
  seasons,
}: {
  seasons: typeof mediaDetailsMock.seasons;
}) {
  return (
    <section>
      <h2>Temporadas</h2>

      {seasons.length === 0 && <p>Nenhuma temporada cadastrada.</p>}

      <ul>
        {seasons.map((season) => (
          <li key={season.id}>
            <article>
              <header>
                <h3>
                  {season.number}ª Temporada: {season.title}
                </h3>

                <p>{season.releaseYear}</p>
              </header>

              {season.versions.map((version) => (
                <section key={version.id}>
                  <header>
                    <h4>
                      {version.resolution} · {version.language}
                    </h4>
                  </header>

                  <ul>
                    {version.episodes.map((episode) => (
                      <li key={episode.id}>
                        <span>
                          EP.{episode.number}: {episode.title}
                        </span>

                        <span>
                          {episode.userStatus.acquired
                            ? "Adquirido"
                            : "Não adquirido"}
                        </span>

                        <span>
                          {episode.userStatus.consumed
                            ? "Consumido"
                            : "Não consumido"}
                        </span>
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
function MediaExpansions({
  edition,
}: {
  edition: typeof mediaDetailsMock.edition;
}) {
  return (
    <section>
      <h2>Expansões</h2>

      <div>
        {edition.base && (
          <article>
            <Link href={`/media/${edition.base.id}`}>
              <strong>Base</strong>

              <Image
                src={edition.base.cover.url}
                alt={edition.base.cover.alt}
                width={80}
                height={120}
              />

              <p>{edition.base.title}</p>

              <span>{edition.base.releaseYear}</span>
            </Link>
          </article>
        )}

        {edition.expansions.length > 0 && (
          <div>
            <h3>Expansões</h3>

            <ul>
              {edition.expansions.map((expansion) => (
                <li key={expansion.id}>
                  <Link href={`/media/${expansion.id}`}>
                    <strong>Expansão</strong>

                    <Image
                      src={expansion.cover.url}
                      alt={expansion.cover.alt}
                      width={80}
                      height={120}
                    />

                    <p>{expansion.title}</p>

                    <span>{expansion.releaseYear}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        {edition.dlcs.length > 0 && (
          <div>
            <h3>DLCs</h3>

            <ul>
              {edition.dlcs.map((dlc) => (
                <li key={dlc.id}>
                  <Link href={`/media/${dlc.id}`}>
                    <strong>DLC</strong>

                    <Image
                      src={dlc.cover.url}
                      alt={dlc.cover.alt}
                      width={80}
                      height={120}
                    />

                    <p>{dlc.title}</p>

                    <span>{dlc.releaseYear}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
function MediaContinuity({
  continuity,
}: {
  continuity: typeof mediaDetailsMock.continuity;
}) {
  return (
    <section>
      <h2>Continuidade</h2>

      <div>
        {continuity.previous && (
          <Link href={`/media/${continuity.previous.id}`}>
            <strong>Anterior</strong>

            <Image
              src={continuity.previous.cover.url}
              alt={continuity.previous.cover.alt}
              width={80}
              height={120}
            />

            <p>{continuity.previous.title}</p>

            <span>{continuity.previous.releaseYear}</span>
          </Link>
        )}

        {continuity.next && (
          <Link href={`/media/${continuity.next.id}`}>
            <strong>Seguinte</strong>

            <Image
              src={continuity.next.cover.url}
              alt={continuity.next.cover.alt}
              width={80}
              height={120}
            />

            <p>{continuity.next.title}</p>

            <span>{continuity.next.releaseYear}</span>
          </Link>
        )}
      </div>
    </section>
  );
}
function MediaFiles({ files }: { files: typeof mediaDetailsMock.files }) {
  return (
    <section>
      <h2>Arquivos</h2>

      {files.length === 0 && <p>Nenhum arquivo disponível.</p>}

      <ul>
        {files.map((file) => (
          <li key={file.id}>
            <div>
              <File />
            </div>

            <div>
              <p>{file.name}</p>

              <p>
                {file.extension.toUpperCase()} · {file.sizeLabel}
              </p>
            </div>

            <a
              href={file.downloadUrl}
              download
              aria-label={`Baixar ${file.name}`}
            >
              <Download />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
function MediaGallery({
  gallery,
}: {
  gallery: typeof mediaDetailsMock.gallery;
}) {
  return (
    <section>
      <h2>Galeria</h2>

      {gallery.length === 0 && <p>Nenhuma imagem disponível.</p>}

      <ul>
        {gallery.map((item) => (
          <li key={item.id}>
            <Link href={item.imageUrl}>
              <Image
                src={item.thumbnailUrl}
                alt={item.title}
                width={200}
                height={120}
              />

              <p>{item.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
function MediaFranchises({
  franchises,
}: {
  franchises: typeof mediaDetailsMock.franchises;
}) {
  return (
    <section>
      <h2>Franquias</h2>

      {franchises.length === 0 && <p>Nenhuma franquia relacionada.</p>}

      <ul>
        {franchises.map((franchise) => (
          <li key={franchise.id}>
            <Link href={`/franchises/${franchise.id}`}>
              <Image
                src={franchise.logo.url}
                alt={franchise.logo.alt}
                width={100}
                height={100}
              />

              <p>{franchise.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
