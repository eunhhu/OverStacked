import { Type, type Static } from "@sinclair/typebox";
import { type StyleRules, ruleHandle } from "./utils";
import { parseValue } from "./parser";

export const PositionProps = Type.Object({
    absolute: Type.Optional(Type.Boolean()),
    relative: Type.Optional(Type.Boolean()),
    fixed: Type.Optional(Type.Boolean()),
    sticky: Type.Optional(Type.Boolean()),
    top: Type.Optional(Type.String()),
    right: Type.Optional(Type.String()),
    bottom: Type.Optional(Type.String()),
    left: Type.Optional(Type.String()),
    zIndex: Type.Optional(Type.String()),
});

export type PositionProps = Static<typeof PositionProps>;

export const positionRules: StyleRules<PositionProps> = {
    absolute: [ruleHandle("position", v => v ? "absolute" : "")],
    relative: [ruleHandle("position", v => v ? "relative" : "")],
    fixed: [ruleHandle("position", v => v ? "fixed" : "")],
    sticky: [ruleHandle("position", v => v ? "sticky" : "")],
    top: [ruleHandle("top", v => parseValue(v))],
    right: [ruleHandle("right", v => parseValue(v))],
    bottom: [ruleHandle("bottom", v => parseValue(v))],
    left: [ruleHandle("left", v => parseValue(v))],
    zIndex: [ruleHandle("z-index", v => parseValue(v))],
};
