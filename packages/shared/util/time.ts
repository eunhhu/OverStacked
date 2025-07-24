import type { TimeUnit } from "../types/time"

/**
 * Parse a string to milliseconds
 * @param raw - string to parse in format `1d`, `1h`, `1m`, `1s`, `1ms`
 * @returns number of milliseconds
 */
export function parseRawToMillis(raw: string): number {
    const unit: TimeUnit = raw.slice(-1) as TimeUnit
    const value = parseInt(raw.slice(0, -1))
    switch (unit) {
        case "d":
            return value * 24 * 60 * 60 * 1000
        case "h":
            return value * 60 * 60 * 1000
        case "m":
            return value * 60 * 1000
        case "s":
            return value * 1000
        case "ms":
            return value
        default:
            return value
    }
}
