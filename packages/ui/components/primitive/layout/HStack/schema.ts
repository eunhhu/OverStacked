import { Type, type Static } from "@sinclair/typebox";
import { type StyleRules } from "../../../../property";

export const HStackProps = Type.Object({})

export type HStackProps = Static<typeof HStackProps>;

export const hStackRules: StyleRules<HStackProps> = {};

export const defaultHStackStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "row",
}