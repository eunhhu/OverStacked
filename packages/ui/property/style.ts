import { Type, type Static } from "@sinclair/typebox";
import { type StyleRules, ruleHandle } from "./utils";
import { parseValue } from "./parser";

export const StyleProps = Type.Object({
    font: Type.Optional(Type.String()),
    textColor: Type.Optional(Type.String()),
    textLeft: Type.Optional(Type.Boolean()),
    textCenter: Type.Optional(Type.Boolean()),
    textRight: Type.Optional(Type.Boolean()),
    bgColor: Type.Optional(Type.String()),
    borderColor: Type.Optional(Type.String()),
    borderWidth: Type.Optional(Type.String()),
});

export type StyleProps = Static<typeof StyleProps>;

export const styleRules: StyleRules<StyleProps> = {
    font: [
        ruleHandle("font-family", v => parseValue(`${v}-fontFamily`)),
        ruleHandle("font-size", v => parseValue(`${v}-fontSize`)),
        ruleHandle("font-weight", v => parseValue(`${v}-fontWeight`)),
        ruleHandle("line-height", v => parseValue(`${v}-lineHeight`)),
        ruleHandle("letter-spacing", v => parseValue(`${v}-letterSpacing`)),
    ],
    textColor: [ruleHandle("color", v => parseValue(v))],
    textLeft: [ruleHandle("text-align", v => v ? "left" : "")],
    textCenter: [ruleHandle("text-align", v => v ? "center" : "")],
    textRight: [ruleHandle("text-align", v => v ? "right" : "")],
    bgColor: [ruleHandle("background-color", v => parseValue(v))],
    borderColor: [ruleHandle("border-color", v => parseValue(v)), ruleHandle("border-style", v => v ? "solid" : "", 2), ruleHandle("border-width", v => v ? "1px" : "", 2)],
    borderWidth: [ruleHandle("border-width", v => parseValue(v), 1), ruleHandle("border-style", v => v ? "solid" : "", 2), ruleHandle("border-color", v => v ? "#000" : "", 2)],
};
