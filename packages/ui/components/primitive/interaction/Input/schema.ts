import { Type, type Static } from "@sinclair/typebox";
import { type StyleRules, parseValue, ruleHandle } from "../../../../property";

export const InputProps = Type.Object({
    variant: Type.Optional(Type.Enum({
        fill: "fill",
        outline: "outline",
    })),
    type: Type.Optional(Type.String()),
    disabled: Type.Optional(Type.Boolean()),
    value: Type.Optional(Type.String()),
    placeholder: Type.Optional(Type.String()),
    onChange: Type.Optional(Type.Function([Type.Any()], Type.Void()))
})

export type InputProps = Static<typeof InputProps>;

export const inputRules: StyleRules<InputProps> = {
    variant: [
        ruleHandle("background-color", v => {
            switch (v) {
                case "fill":
                    return parseValue("surface");
                case "outline":
                    return "transparent";
                default:
                    return "";
            }
        }, 0),
        ruleHandle("border", v => {
            switch (v) {
                case "fill":
                    return "";
                case "outline":
                    return `1px solid ${parseValue("outline")}`;
                default:
                    return "";
            }
        }, 0),
        ruleHandle("color", v => {
            switch (v) {
                case "fill":
                    return parseValue("onBackground");
                case "outline":
                    return parseValue("onBackground");
                default:
                    return "";
            }
        }, 0),
    ],
    type: [],
    disabled: [ruleHandle("opacity", v => v ? "0.5" : "1")],
    value: [],
    placeholder: [],
    onChange: [],
};

export const defaultInputStyle: React.CSSProperties = {
    display: "inline-block",
    border: "none",
    backgroundColor: "transparent",
    padding: "0",
}