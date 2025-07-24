import { Elysia } from "elysia";
import { Type } from "@sinclair/typebox";
import { Api, ApiResponse } from "@overstacked/shared";
import { AuthGuard } from "./guard";
import { JwtPayload, type JwtPayloadType } from "./schema";
import { authPlugin } from "./plugin";
import { PrismaClient } from "@prisma/client";

interface AuthRoutesOptions {
    prisma: PrismaClient
}

export const authRoutes = (app: Elysia, options: AuthRoutesOptions) => app
    .use(authPlugin)

    .post("/login", async ({ body, accessJwt, refreshJwt, cookie }) => {
        const { email, password } = body;
        
        const user = await options.prisma.user.findUnique({ 
            where: { email },
            include: { roles: true }
        });
        if (!user) {
            return Api.unauthorized("Invalid credentials");
        }

        const accessTokenValue = await accessJwt.sign({ 
            id: user.id, 
            name: user.name, 
            email: user.email, 
            roles: user.roles.map(role => role.name).join(',')
        });
        const refreshTokenValue = await refreshJwt.sign({ id: user.id });

        cookie.accessToken?.set({
            value: accessTokenValue,
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            maxAge: 3600
        });

        cookie.refreshToken?.set({
            value: refreshTokenValue,
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            maxAge: 604800
        });

        return Api.success({
            user,
            accessToken: accessTokenValue,
            refreshToken: refreshTokenValue
        });
    }, {
        body: Type.Object({
            email: Type.String({ format: "email" }),
            password: Type.String({ minLength: 6 })
        }),
        response: ApiResponse(Type.Object({
            user: Type.Object({
                id: Type.String(),
                email: Type.String(),
                name: Type.String(),
                roles: Type.Array(Type.String())
            }),
            accessToken: Type.String(),
            refreshToken: Type.String()
        }))
    })

    .post("/refresh", async ({ refreshPayload, accessJwt, cookie, refreshJwt }) => {
        if (!refreshPayload) {
            return Api.unauthorized("Invalid refresh token");
        }

        const user = await options.prisma.user.findUnique({ 
            where: { id: refreshPayload.id },
            include: { roles: true }
        });
        if (!user) {
            return Api.unauthorized("Invalid refresh token");
        }

        const newAccessTokenValue = await accessJwt.sign({ 
            id: user.id, 
            name: user.name, 
            email: user.email, 
            roles: user.roles.map(role => role.name).join(',')
        });

        cookie.accessToken?.set({
            value: newAccessTokenValue,
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            maxAge: 3600
        });

        return Api.success({
            accessToken: newAccessTokenValue
        });
    }, {
        response: ApiResponse(Type.Object({
            accessToken: Type.String()
        }))
    })

    .guard(AuthGuard.required())
    .get("/me", ({ accessPayload }) => {
        return Api.success(accessPayload);
    }, {
        response: ApiResponse(JwtPayload)
    })
    .post("/logout", ({ cookie }) => {
        cookie.accessToken?.remove();
        cookie.refreshToken?.remove();

        return Api.success(null);
    }, {
        response: ApiResponse(Type.Null())
    })