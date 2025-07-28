import { Type, type Static } from "@sinclair/typebox";
import { ruleHandle, type StyleRules } from "./utils";
import { parseValue } from "./parser";

export const SizeProps = Type.Object({
    w: Type.Optional(Type.String()),
    minw: Type.Optional(Type.String()),
    maxw: Type.Optional(Type.String()),
    h: Type.Optional(Type.String()),
    minh: Type.Optional(Type.String()),
    maxh: Type.Optional(Type.String()),
});

export type SizeProps = Static<typeof SizeProps>;

export const sizeRules: StyleRules<SizeProps> = {
    w: [ruleHandle("width", parseValue)],
    minw: [ruleHandle("min-width")],
    maxw: [ruleHandle("max-width")],
    h: [ruleHandle("height")],
    minh: [ruleHandle("min-height")],
    maxh: [ruleHandle("max-height")],
};
