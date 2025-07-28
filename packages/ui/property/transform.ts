import { Type, type Static } from "@sinclair/typebox";
import { ruleHandle, type StyleRules } from "./utils";
import { parseValue } from "./parser";

export const TransformProps = Type.Object({
    x: Type.Optional(Type.String()),
    y: Type.Optional(Type.String()),
    z: Type.Optional(Type.String()),
    rotate: Type.Optional(Type.String()),
    rotateX: Type.Optional(Type.String()),
    rotateY: Type.Optional(Type.String()),
    rotateZ: Type.Optional(Type.String()),
    scale: Type.Optional(Type.String()),
    scaleX: Type.Optional(Type.String()),
    scaleY: Type.Optional(Type.String()),
    skewX: Type.Optional(Type.String()),
    skewY: Type.Optional(Type.String()),
});

export type TransformProps = Static<typeof TransformProps>;

export const transformRules: StyleRules<TransformProps> = {
    x: [ruleHandle("transform", v => `translateX(${parseValue(v)})`, 1, "add")],
    y: [ruleHandle("transform", v => `translateY(${parseValue(v)})`, 1, "add")],
    z: [ruleHandle("transform", v => `translateZ(${parseValue(v)})`, 1, "add")],
    rotate: [ruleHandle("transform", v => `rotate(${parseValue(v)})`, 1, "add")],
    rotateX: [ruleHandle("transform", v => `rotateX(${parseValue(v)})`, 1, "add")],
    rotateY: [ruleHandle("transform", v => `rotateY(${parseValue(v)})`, 1, "add")],
    rotateZ: [ruleHandle("transform", v => `rotateZ(${parseValue(v)})`, 1, "add")],
    scale: [ruleHandle("transform", v => `scale(${parseValue(v)})`, 1, "add")],
    scaleX: [ruleHandle("transform", v => `scaleX(${parseValue(v)})`, 1, "add")],
    scaleY: [ruleHandle("transform", v => `scaleY(${parseValue(v)})`, 1, "add")],
    skewX: [ruleHandle("transform", v => `skewX(${parseValue(v)})`, 1, "add")],
    skewY: [ruleHandle("transform", v => `skewY(${parseValue(v)})`, 1, "add")],
};
