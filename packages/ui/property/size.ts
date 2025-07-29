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
    scrollable: Type.Optional(Type.Boolean()),
});

export type SizeProps = Static<typeof SizeProps>;

export const sizeRules: StyleRules<SizeProps> = {
    w: [ruleHandle("width", v => parseValue(v))],
    minw: [ruleHandle("min-width", v => parseValue(v))],
    maxw: [ruleHandle("max-width", v => parseValue(v))],
    h: [ruleHandle("height", v => parseValue(v))],
    minh: [ruleHandle("min-height", v => parseValue(v))],
    maxh: [ruleHandle("max-height", v => parseValue(v))],
    scrollable: [ruleHandle("overflow", v => v ? "auto" : "")],
};
