import { Type, type Static } from "@sinclair/typebox";
import { ruleHandle, type StyleRules } from "./utils";
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

export const spacingRules: StyleRules<SpacingProps> = {
    // Padding
    p: [ruleHandle("padding", v => parseValue(v))],
    pv: [ruleHandle("padding-top", v => parseValue(v), 2), ruleHandle("padding-bottom", v => parseValue(v), 2)],
    ph: [ruleHandle("padding-left", v => parseValue(v), 2), ruleHandle("padding-right", v => parseValue(v), 2)],
    pt: [ruleHandle("padding-top", v => parseValue(v))],
    pr: [ruleHandle("padding-right", v => parseValue(v))],
    pb: [ruleHandle("padding-bottom", v => parseValue(v))],
    pl: [ruleHandle("padding-left", v => parseValue(v))],
    
    // Margin
    m: [ruleHandle("margin", v => parseValue(v))],
    mv: [ruleHandle("margin-top", v => parseValue(v), 2), ruleHandle("margin-bottom", v => parseValue(v), 2)],
    mh: [ruleHandle("margin-left", v => parseValue(v), 2), ruleHandle("margin-right", v => parseValue(v), 2)],
    mt: [ruleHandle("margin-top", v => parseValue(v))],
    mr: [ruleHandle("margin-right", v => parseValue(v))],
    mb: [ruleHandle("margin-bottom", v => parseValue(v))],
    ml: [ruleHandle("margin-left", v => parseValue(v))],
    
    // Border radius
    r: [ruleHandle("border-radius", v => parseValue(v))],
    rt: [ruleHandle("border-radius", v => `${parseValue(v)} ${parseValue(v)} 0 0`)],
    rr: [ruleHandle("border-radius", v => `0 ${parseValue(v)} ${parseValue(v)} 0`)],
    rb: [ruleHandle("border-radius", v => `0 0 ${parseValue(v)} ${parseValue(v)}`)],
    rl: [ruleHandle("border-radius", v => `${parseValue(v)} 0 0 ${parseValue(v)}`)],
    
    gap: [ruleHandle("gap", v => parseValue(v))],
};
