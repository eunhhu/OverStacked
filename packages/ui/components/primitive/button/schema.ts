import { Type, type Static } from "@sinclair/typebox";

export const ButtonProps = Type.Object({
    children: Type.String()
});

export type ButtonProps = Static<typeof ButtonProps>;
