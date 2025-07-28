import { Type, type Static } from "@sinclair/typebox";
import { processStyles, type StyleRules, ruleHandle } from "./utils";
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

const positionRules: StyleRules<PositionProps> = {
    absolute: [ruleHandle("position", v => v ? "absolute" : "")],
    relative: [ruleHandle("position", v => v ? "relative" : "")],
    fixed: [ruleHandle("position", v => v ? "fixed" : "")],
    sticky: [ruleHandle("position", v => v ? "sticky" : "")],
    top: [ruleHandle("top", parseValue)],
    right: [ruleHandle("right", parseValue)],
    bottom: [ruleHandle("bottom", parseValue)],
    left: [ruleHandle("left", parseValue)],
    zIndex: [ruleHandle("z-index", parseValue)],
};

export const PositionToCSS = (props: PositionProps): string => 
    processStyles(props, positionRules).toCSS();

export const PositionToStyle = (props: PositionProps): Record<string, string> => 
    processStyles(props, positionRules).toStyle();
