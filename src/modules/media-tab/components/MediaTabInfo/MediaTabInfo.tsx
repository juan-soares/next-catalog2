import type { MediaView } from "@/modules/media/types";
import {
  Tag,
  CalendarDays,
  LanguagesIcon,
  Gamepad2Icon,
  TagsIcon,
  Layers,
  Users,
  Joystick,
} from "lucide-react";

type Props = {
  media: MediaView;
};

export function MediaTabInfo({ media }: Props) {
  return (
    <section>
      <h2>Informações</h2>

      <dl>
        <div>
          <dt>
            <Tag /> Título:
          </dt>
          <dd>{media.info.title}</dd>
        </div>

        <div>
          <dt>
            <Tag /> Título Traduzido:
          </dt>
          <dd>{media.info.translatedTitle || "N/A"}</dd>
        </div>

        <div>
          <dt>
            <CalendarDays /> Lançamento:
          </dt>
          <dd>{media.info.release.date}</dd>
        </div>

        <div>
          <dt>
            <LanguagesIcon /> Idiomas:
          </dt>
          <dd>
            {media.attributes.languages.map(({ label }) => label).join(", ") ||
              "N/A"}
          </dd>
        </div>

        <div>
          <dt>
            <Gamepad2Icon /> Gêneros:
          </dt>
          <dd>
            {media.attributes.genres.map(({ label }) => label).join(", ") ||
              "N/A"}
          </dd>
        </div>

        <div>
          <dt>
            <TagsIcon /> Temáticas:
          </dt>
          <dd>
            {media.attributes.themes.map(({ label }) => label).join(", ") ||
              "N/A"}
          </dd>
        </div>

        {media.categoryStructure === "game" && (
          <>
            <div>
              <dt>
                <Layers /> Edição:
              </dt>
              <dd>{media.details.edition.type.label}</dd>
            </div>

            <div>
              <dt>
                <Users /> Jogadores:
              </dt>
              <dd>
                {media.info.players.min} - {media.info.players.max}
              </dd>
            </div>

            <div>
              <dt>
                <Users /> Modos:
              </dt>
              <dd>
                {media.attributes.modes.map(({ label }) => label).join(", ") ||
                  "N/A"}
              </dd>
            </div>

            <div>
              <dt>
                <Joystick /> Gameplays:
              </dt>
              <dd>
                {media.attributes.gameplays
                  .map(({ label }) => label)
                  .join(", ") || "N/A"}
              </dd>
            </div>
          </>
        )}
      </dl>
    </section>
  );
}
