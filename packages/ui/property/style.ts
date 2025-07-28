import { Type, type Static } from "@sinclair/typebox";
import { processStyles, type StyleRules, ruleHandle } from "./utils";
import { parseValue } from "./parser";

export const StyleProps = Type.Object({
    font: Type.Optional(Type.String()),
    textColor: Type.Optional(Type.String()),
    bgColor: Type.Optional(Type.String()),
    borderColor: Type.Optional(Type.String()),
    borderWidth: Type.Optional(Type.String()),
});

export type StyleProps = Static<typeof StyleProps>;

const styleRules: StyleRules<StyleProps> = {
    font: [
        ruleHandle("font-family", v => parseValue(`${v}-fontFamily`)),
        ruleHandle("font-size", v => parseValue(`${v}-fontSize`)),
        ruleHandle("font-weight", v => parseValue(`${v}-fontWeight`)),
        ruleHandle("line-height", v => parseValue(`${v}-lineHeight`)),
        ruleHandle("letter-spacing", v => parseValue(`${v}-letterSpacing`)),
    ],
    textColor: [ruleHandle("color", parseValue)],
    bgColor: [ruleHandle("background-color", parseValue)],
    borderColor: [ruleHandle("border-color", parseValue), ruleHandle("border-style", v => v ? "solid" : "", 2), ruleHandle("border-width", v => v ? "1px" : "", 2)],
    borderWidth: [ruleHandle("border-width", parseValue, 1), ruleHandle("border-style", v => v ? "solid" : "", 2), ruleHandle("border-color", v => v ? "#000" : "", 2)],
};

export const StyleToCSS = (props: StyleProps): string => 
    processStyles(props, styleRules).toCSS();

export const StyleToStyle = (props: StyleProps): Record<string, string> => 
    processStyles(props, styleRules).toStyle();
