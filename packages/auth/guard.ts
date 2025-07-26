import { Api } from "@overstacked/shared"
import type { JwtPayloadType } from "./schema"

export class AuthGuard {
    static required() {
        return {
            beforeHandle: ({ accessPayload }: { accessPayload: JwtPayloadType }) => {
                if (!accessPayload) {
                    return Api.unauthorized()
                }
            }
        }
    }

    static roles = {
        every: (roles: string[]) => ({
            beforeHandle: ({ accessPayload }: { accessPayload: JwtPayloadType }) => {
                if (!accessPayload) {
                    return Api.unauthorized()
                }
                
                const userRoles = accessPayload.roles.split(',') || []
                const hasAllRoles = roles.every(role => userRoles.includes(role))
                
                if (!hasAllRoles) {
                    return Api.forbidden()
                }
            }
        }),

        some: (roles: string[]) => ({
            beforeHandle: ({ accessPayload }: { accessPayload: JwtPayloadType }) => {
                if (!accessPayload) {
                    return Api.unauthorized()
                }
                
                const userRoles = accessPayload.roles.split(',') || []
                const hasAnyRole = roles.some(role => userRoles.includes(role))
                
                if (!hasAnyRole) {
                    return Api.forbidden()
                }
            }
        }),

        not: (roles: string[]) => ({
            beforeHandle: ({ accessPayload }: { accessPayload: JwtPayloadType }) => {
                if (!accessPayload) {
                    return Api.unauthorized()
                }
                
                const userRoles = accessPayload.roles.split(',') || []
                const hasForbiddenRole = roles.some(role => userRoles.includes(role))
                
                if (hasForbiddenRole) {
                    return Api.forbidden()
                }
            }
        }),

        contain: (role: string) => ({
            beforeHandle: ({ accessPayload }: { accessPayload: JwtPayloadType }) => {
                if (!accessPayload) {
                    return Api.unauthorized()
                }
                
                const userRoles = accessPayload.roles.split(',') || []
                
                if (!userRoles.includes(role)) {
                    return Api.forbidden()
                }
            }
        })
    }
}