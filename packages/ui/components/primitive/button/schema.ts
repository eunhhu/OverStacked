import { Type, type Static } from "@sinclair/typebox";
import { type StyleRules, parseValue, ruleHandle } from "../../../property";

export const ButtonProps = Type.Object({
    variant: Type.Optional(Type.Enum({
        primary: "primary",
        secondary: "secondary",
        outline: "outline",
        ghost: "ghost",
    })),
    disabled: Type.Optional(Type.Boolean()),
    onClick: Type.Optional(Type.Function([Type.Any()], Type.Void())),
})

export type ButtonProps = Static<typeof ButtonProps>;

export const buttonRules: StyleRules<ButtonProps> = {
    variant: [ruleHandle("background-color", v => {
        switch (v) {
            case "primary":
                return parseValue("primary");
            case "secondary":
                return parseValue("background");
            default:
                return "";
        }
    }, 0)],
    disabled: [
        ruleHandle("opacity", v => v ? "0.5" : "1"), 
        ruleHandle("cursor", v => v ? "not-allowed" : "pointer"), 
    ],
    onClick: [],
};

export const defaultButtonStyle: React.CSSProperties = {
    cursor: "pointer",
    pointerEvents: "auto",
}