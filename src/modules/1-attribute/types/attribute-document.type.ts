import { HydratedDocument } from "mongoose";
import { Attribute } from "./attribute.type";

export type AttributeDocument = HydratedDocument<Attribute>;
