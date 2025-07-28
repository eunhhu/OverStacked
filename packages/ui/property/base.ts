import { Type, type Static } from "@sinclair/typebox";

export const BaseProps = Type.Object({
    children: Type.Optional(Type.Any()),
    className: Type.Optional(Type.String()),
    style: Type.Optional(Type.String()),
    ref: Type.Optional(Type.Any()),
});

export type BaseProps = Static<typeof BaseProps>;
