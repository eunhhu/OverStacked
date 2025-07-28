import { Type, type Static } from "@sinclair/typebox";
import { processStyles, type StyleRules, ruleHandle } from "./utils";

export const LayoutProps = Type.Object({
    row: Type.Optional(Type.Boolean()),
    col: Type.Optional(Type.Boolean()),
    justifyStart: Type.Optional(Type.Boolean()),
    justifyEnd: Type.Optional(Type.Boolean()),
    justifyCenter: Type.Optional(Type.Boolean()),
    justifyBetween: Type.Optional(Type.Boolean()),
    justifyAround: Type.Optional(Type.Boolean()),
    justifyEvenly: Type.Optional(Type.Boolean()),
    itemStart: Type.Optional(Type.Boolean()),
    itemEnd: Type.Optional(Type.Boolean()),
    itemCenter: Type.Optional(Type.Boolean()),
    itemStretch: Type.Optional(Type.Boolean()),
    itemBaseline: Type.Optional(Type.Boolean()),
    wrap: Type.Optional(Type.Boolean()),
    wrapReverse: Type.Optional(Type.Boolean()),
    flex: Type.Optional(Type.Number()),
});

export type LayoutProps = Static<typeof LayoutProps>;

const layoutRules: StyleRules<LayoutProps> = {
    row: [ruleHandle("display", v => v ? "flex" : ""), ruleHandle("flex-direction", v => v ? "row" : "")],
    col: [ruleHandle("display", v => v ? "flex" : ""), ruleHandle("flex-direction", v => v ? "column" : "")],
    justifyStart: [ruleHandle("justify-content", v => v ? "flex-start" : "")],
    justifyEnd: [ruleHandle("justify-content", v => v ? "flex-end" : "")],
    justifyCenter: [ruleHandle("justify-content", v => v ? "center" : "")],
    justifyBetween: [ruleHandle("justify-content", v => v ? "space-between" : "")],
    justifyAround: [ruleHandle("justify-content", v => v ? "space-around" : "")],
    justifyEvenly: [ruleHandle("justify-content", v => v ? "space-evenly" : "")],
    itemStart: [ruleHandle("align-items", v => v ? "flex-start" : "")],
    itemEnd: [ruleHandle("align-items", v => v ? "flex-end" : "")],
    itemCenter: [ruleHandle("align-items", v => v ? "center" : "")],
    itemStretch: [ruleHandle("align-items", v => v ? "stretch" : "")],
    itemBaseline: [ruleHandle("align-items", v => v ? "baseline" : "")],
    wrap: [ruleHandle("flex-wrap", v => v ? "wrap" : "")],
    wrapReverse: [ruleHandle("flex-wrap", v => v ? "wrap-reverse" : "")],
    flex: [ruleHandle("flex", v => v ? v : "")],
};

export const LayoutToCSS = (props: LayoutProps): string => 
    processStyles(props, layoutRules).toCSS();

export const LayoutToStyle = (props: LayoutProps): Record<string, string> => 
    processStyles(props, layoutRules).toStyle();
