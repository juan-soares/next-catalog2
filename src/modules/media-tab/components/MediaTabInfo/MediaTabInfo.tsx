import type { MediaFamilyCode } from "@/modules/media-family/types";
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

type Props = Pick<MediaView, "info" | "attributes" | "edition"> & {
  familyCode: MediaFamilyCode;
};

export function MediaTabInfo({ info, attributes, edition, familyCode }: Props) {
  return (
    <section>
      <h2>Informações</h2>

      <dl>
        <div>
          <dt>
            <Tag /> Título:
          </dt>
          <dd>{info.title}</dd>
        </div>

        <div>
          <dt>
            <Tag /> Título Traduzido:
          </dt>
          <dd>{info.translatedTitle || "N/A"}</dd>
        </div>

        <div>
          <dt>
            <CalendarDays /> Lançamento:
          </dt>
          <dd>{info.release.date}</dd>
        </div>

        <div>
          <dt>
            <LanguagesIcon /> Idiomas:
          </dt>
          <dd>
            {attributes.languages.map(({ label }) => label).join(", ") || "N/A"}
          </dd>
        </div>

        <div>
          <dt>
            <Gamepad2Icon /> Gêneros:
          </dt>
          <dd>
            {attributes.genres.map(({ label }) => label).join(", ") || "N/A"}
          </dd>
        </div>

        <div>
          <dt>
            <TagsIcon /> Temáticas:
          </dt>
          <dd>
            {attributes.themes.map(({ label }) => label).join(", ") || "N/A"}
          </dd>
        </div>

        {familyCode === "game" && (
          <>
            <div>
              <dt>
                <Layers /> Edição:
              </dt>
              <dd>{edition.type.label}</dd>
            </div>

            <div>
              <dt>
                <Users /> Jogadores:
              </dt>
              <dd>
                {info.players.min} - {info.players.max}
              </dd>
            </div>

            <div>
              <dt>
                <Users /> Modos:
              </dt>
              <dd>
                {attributes.modes.map(({ label }) => label).join(", ") || "N/A"}
              </dd>
            </div>

            <div>
              <dt>
                <Joystick /> Gameplays:
              </dt>
              <dd>
                {attributes.gameplays.map(({ label }) => label).join(", ") ||
                  "N/A"}
              </dd>
            </div>
          </>
        )}
      </dl>
    </section>
  );
}
