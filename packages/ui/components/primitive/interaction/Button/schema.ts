import { Type, type Static } from "@sinclair/typebox";
import { type StyleRules, parseValue, ruleHandle } from "../../../../property";

export const ButtonProps = Type.Object({
    variant: Type.Optional(Type.Enum({
        primary: "primary",
        secondary: "secondary",
        outline: "outline",
    })),
    disabled: Type.Optional(Type.Boolean()),
    onClick: Type.Optional(Type.Function([Type.Any()], Type.Void())),
})

export type ButtonProps = Static<typeof ButtonProps>;

export const buttonRules: StyleRules<ButtonProps> = {
    variant: [
        ruleHandle("background-color", v => {
            switch (v) {
                case "primary":
                    return parseValue("primary");
                case "secondary":
                    return parseValue("surface");
                case "outline":
                    return "";
                default:
                    return "";
            }
        }, 0),
        ruleHandle("border", v => {
            switch (v) {
                case "primary":
                    return "";
                case "secondary":
                    return "";
                case "outline":
                    return `1px solid ${parseValue("outline")}`;
                default:
                    return "";
            }
        }, 0),
        ruleHandle("color", v => {
            switch (v) {
                case "primary":
                    return parseValue("onPrimary");
                case "secondary":
                    return parseValue("onBackground");
                case "outline":
                    return parseValue("onBackground");
                default:
                    return "";
            }
        }, 0),
    ],
    disabled: [ruleHandle("opacity", v => v ? "0.5" : "1")],
    onClick: [],
};

export const defaultButtonStyle: React.CSSProperties = {
    display: "inline-block",
    border: "none",
    backgroundColor: "transparent",
    cursor: "pointer",
}