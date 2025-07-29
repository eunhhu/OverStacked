import { Type, type Static } from "@sinclair/typebox";
import { type StyleRules, parseValue, ruleHandle } from "../../../../property";

export const CheckboxProps = Type.Object({
    size: Type.Optional(Type.String()),
    fillColor: Type.Optional(Type.String()),
    outlineColor: Type.Optional(Type.String()),
    disabled: Type.Optional(Type.Boolean()),
    checked: Type.Optional(Type.Boolean()),
    onChange: Type.Optional(Type.Function([Type.Any()], Type.Void()))
})

export type CheckboxProps = Static<typeof CheckboxProps>;

export const checkboxRules: StyleRules<CheckboxProps> = {
    size: [
        ruleHandle("width", v => parseValue(v || "20px")),
        ruleHandle("height", v => parseValue(v || "20px")),
    ],
    fillColor: [ruleHandle("background-color", (v, props) => props.checked ? parseValue(v || "primary") : "transparent")],
    outlineColor: [ruleHandle("border", (v, props) => !props.checked ? `1px solid ${parseValue(v || "outline")}` : "none")],
    disabled: [ruleHandle("opacity", v => v ? "0.5" : "1")],
    checked: [],
    onChange: [],
};

export const defaultCheckboxStyle: React.CSSProperties = {
    width: "20px",
    height: "20px",
    display: "inline-block",
    lineHeight: "normal",
    border: "none",
    backgroundColor: "transparent",
}