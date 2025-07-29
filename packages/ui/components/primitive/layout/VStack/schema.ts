import { Type, type Static } from "@sinclair/typebox";
import { type StyleRules } from "../../../../property";

export const VStackProps = Type.Object({})

export type VStackProps = Static<typeof VStackProps>;

export const vStackRules: StyleRules<VStackProps> = {};

export const defaultVStackStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
}