import { Role, Target } from './game.ts'

export interface ConfigType {
    roles: Record<Role, number>
    target: Target
    pass: Array<string>
}

export interface TokenConfigType {
    tokens: Record<string, string>
    admins: Array<string>
}

export const loadConfig = (): ConfigType =>
    JSON.parse(Deno.readTextFileSync('./cfg.json'))

export const getTokens = (): TokenConfigType =>
    JSON.parse(Deno.readTextFileSync('./tokens.json').toString())
