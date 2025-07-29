import { Api } from "@overstacked/shared"
import type { JwtPayloadType } from "./schema"
import type { Context } from "elysia";

export class AuthGuard {
    static required() {
        return {
            beforeHandle: ({ accessPayload, set }: { accessPayload: JwtPayloadType, set: Context['set'] }) => {
                if (!accessPayload) {
                    set.status = 401;
                    return Api.unauthorized()
                }
            }
        }
    }

    static roles = {
        every: (roles: string[]) => ({
            beforeHandle: ({ accessPayload, set }: { accessPayload: JwtPayloadType, set: Context['set'] }) => {
                if (!accessPayload) {
                    set.status = 401;
                    return Api.unauthorized()
                }
                
                const userRoles = accessPayload.roles.split(',') || []
                const hasAllRoles = roles.every(role => userRoles.includes(role))
                
                if (!hasAllRoles) {
                    set.status = 403;
                    return Api.forbidden()
                }
            }
        }),

        some: (roles: string[]) => ({
            beforeHandle: ({ accessPayload, set }: { accessPayload: JwtPayloadType, set: Context['set'] }) => {
                if (!accessPayload) {
                    set.status = 401;
                    return Api.unauthorized()
                }
                
                const userRoles = accessPayload.roles.split(',') || []
                const hasAnyRole = roles.some(role => userRoles.includes(role))
                
                if (!hasAnyRole) {
                    set.status = 403;
                    return Api.forbidden()
                }
            }
        }),

        not: (roles: string[]) => ({
            beforeHandle: ({ accessPayload, set }: { accessPayload: JwtPayloadType, set: Context['set'] }) => {
                if (!accessPayload) {
                    set.status = 401;
                    return Api.unauthorized()
                }
                
                const userRoles = accessPayload.roles.split(',') || []
                const hasForbiddenRole = roles.some(role => userRoles.includes(role))
                
                if (hasForbiddenRole) {
                    set.status = 403;
                    return Api.forbidden()
                }
            }
        }),

        contain: (role: string) => ({
            beforeHandle: ({ accessPayload, set }: { accessPayload: JwtPayloadType, set: Context['set'] }) => {
                if (!accessPayload) {
                    set.status = 401;
                    return Api.unauthorized()
                }
                
                const userRoles = accessPayload.roles.split(',') || []
                
                if (!userRoles.includes(role)) {
                    set.status = 403;
                    return Api.forbidden()
                }
            }
        })
    }
}