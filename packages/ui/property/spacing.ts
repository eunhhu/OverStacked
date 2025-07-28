import { Type, type Static } from "@sinclair/typebox";
import { processStyles, ruleHandle, type StyleRules } from "./utils";
import { parseValue } from "./parser";

export const SpacingProps = Type.Object({
    p: Type.Optional(Type.String()),
    pv: Type.Optional(Type.String()),
    ph: Type.Optional(Type.String()),
    pt: Type.Optional(Type.String()),
    pr: Type.Optional(Type.String()),
    pb: Type.Optional(Type.String()),
    pl: Type.Optional(Type.String()),
    m: Type.Optional(Type.String()),
    mv: Type.Optional(Type.String()),
    mh: Type.Optional(Type.String()),
    mt: Type.Optional(Type.String()),
    mr: Type.Optional(Type.String()),
    mb: Type.Optional(Type.String()),
    ml: Type.Optional(Type.String()),
    r: Type.Optional(Type.String()),
    rt: Type.Optional(Type.String()),
    rr: Type.Optional(Type.String()),
    rb: Type.Optional(Type.String()),
    rl: Type.Optional(Type.String()),
    gap: Type.Optional(Type.String()),
});

export type SpacingProps = Static<typeof SpacingProps>;

const spacingRules: StyleRules<SpacingProps> = {
    // Padding
    p: [ruleHandle("padding", parseValue)],
    pv: [ruleHandle("padding", v => parseValue(v) + " 0", 2)],
    ph: [ruleHandle("padding", v => "0 " + parseValue(v), 2)],
    pt: [ruleHandle("padding-top", parseValue)],
    pr: [ruleHandle("padding-right", parseValue)],
    pb: [ruleHandle("padding-bottom", parseValue)],
    pl: [ruleHandle("padding-left", parseValue)],
    
    // Margin
    m: [ruleHandle("margin", parseValue)],
    mv: [ruleHandle("margin", v => parseValue(v) + " 0", 2)],
    mh: [ruleHandle("margin", v => "0 " + parseValue(v), 2)],
    mt: [ruleHandle("margin-top", parseValue)],
    mr: [ruleHandle("margin-right", parseValue)],
    mb: [ruleHandle("margin-bottom", parseValue)],
    ml: [ruleHandle("margin-left", parseValue)],
    
    // Border radius
    r: [ruleHandle("border-radius", parseValue)],
    rt: [ruleHandle("border-radius", v => `${parseValue(v)} ${parseValue(v)} 0 0`)],
    rr: [ruleHandle("border-radius", v => `0 ${parseValue(v)} ${parseValue(v)} 0`)],
    rb: [ruleHandle("border-radius", v => `0 0 ${parseValue(v)} ${parseValue(v)}`)],
    rl: [ruleHandle("border-radius", v => `${parseValue(v)} 0 0 ${parseValue(v)}`)],
    
    gap: [ruleHandle("gap", parseValue)],
};

export const SpacingToCSS = (props: SpacingProps): string => 
    processStyles(props, spacingRules).toCSS();

export const SpacingToStyle = (props: SpacingProps): Record<string, string> => 
    processStyles(props, spacingRules).toStyle();
