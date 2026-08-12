import { HydratedDocument } from "mongoose";
import { MediaItem } from "./media-item.type";

export type MediaItemDocument = HydratedDocument<MediaItem>;
