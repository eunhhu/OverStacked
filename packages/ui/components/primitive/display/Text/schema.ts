import { Type, type Static } from "@sinclair/typebox";
import { type StyleRules, ruleHandle } from "../../../../property";

export const TextProps = Type.Object({
    underline: Type.Optional(Type.Boolean()),
    overline: Type.Optional(Type.Boolean()),
    lineThrough: Type.Optional(Type.Boolean()),
    italic: Type.Optional(Type.Boolean()),
})

export type TextProps = Static<typeof TextProps>;

export const textRules: StyleRules<TextProps> = {
    underline: [ruleHandle("text-decoration", v => v ? "underline" : "")],
    overline: [ruleHandle("text-decoration", v => v ? "overline" : "")],
    lineThrough: [ruleHandle("text-decoration", v => v ? "line-through" : "")],
    italic: [ruleHandle("font-style", v => v ? "italic" : "")],
};

export const defaultTextStyle: React.CSSProperties = {
    display: "inline-block",
}