import type { ApiResponseType } from "../schema/api";

export class Api {
  static success<T>(data: T): ApiResponseType<T> {
    return {
      data,
      timestamp: new Date().toISOString(),
      success: true
    }
  }
  static error<T>(code: number = 400, message: string = "Something went wrong", details?: T): ApiResponseType<T> {
    return {
      timestamp: new Date().toISOString(),
      success: false,
      error: {
        code,
        message,
        details
      }
    }
  }
  static badRequest<T>(details?: T): ApiResponseType<T> {
    return {
      timestamp: new Date().toISOString(),
      success: false,
      error: {
        code: 400,
        message: "Bad Request",
        details
      }
    }
  }
  static unauthorized<T>(details?: T): ApiResponseType<T> {
    return {
      timestamp: new Date().toISOString(),
      success: false,
      error: {
        code: 401,
        message: "Unauthorized",
        details
      }
    }
  }
  static forbidden<T>(details?: T): ApiResponseType<T> {
    return {
      timestamp: new Date().toISOString(),
      success: false,
      error: {
        code: 403,
        message: "Forbidden",
        details
      }
    }
  }
  static notFound<T>(details?: T): ApiResponseType<T> {
    return {
      timestamp: new Date().toISOString(),
      success: false,
      error: {
        code: 404,
        message: "Not Found",
        details
      }
    }
  }
  static conflict<T>(details?: T): ApiResponseType<T> {
    return {
      timestamp: new Date().toISOString(),
      success: false,
      error: {
        code: 409,
        message: "Conflict",
        details
      }
    }
  }
  static internalServerError<T>(details?: T): ApiResponseType<T> {
    return {
      timestamp: new Date().toISOString(),
      success: false,
      error: {
        code: 500,
        message: "Internal Server Error",
        details
      }
    }
  }
}