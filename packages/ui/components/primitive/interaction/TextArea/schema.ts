import { Type, type Static } from "@sinclair/typebox";
import { type StyleRules, parseValue, ruleHandle } from "../../../../property";

export const TextAreaProps = Type.Object({
    variant: Type.Optional(Type.Enum({
        fill: "fill",
        outline: "outline",
    })),
    rows: Type.Optional(Type.Number()),
    cols: Type.Optional(Type.Number()),
    disabled: Type.Optional(Type.Boolean()),
    placeholder: Type.Optional(Type.String()),
    onChange: Type.Optional(Type.Function([Type.Any()], Type.Void()))
})

export type TextAreaProps = Static<typeof TextAreaProps>;

export const textareaRules: StyleRules<TextAreaProps> = {
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
    rows: [],
    cols: [],
    disabled: [ruleHandle("opacity", v => v ? "0.5" : "1")],
    placeholder: [],
    onChange: [],
};

export const defaultTextAreaStyle: React.CSSProperties = {
    display: "inline-block",
    resize: "none",
    border: "none",
    backgroundColor: "transparent",
    padding: "0",
}