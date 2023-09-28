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

const defaultCfg: ConfigType = {
    pass: ['过', 'pass'],
    roles: {
        hunter: 1,
        seer: 1,
        villager: 3,
        werewolf: 3,
        witch: 1,
    },
    target: 'side',
}

// todo use KV(`unstable`)
const checkEnv = (key: string, dft?: string): boolean => {
    if (!Deno.env.has(key) && typeof dft !== 'undefined') {
        Deno.env.set(key, dft)
    }
    return Deno.env.has(key)
}

export const loadConfig = (): ConfigType => {
    checkEnv('pass', JSON.stringify(defaultCfg.pass))

    for (const key in defaultCfg.roles) {
        if (Object.prototype.hasOwnProperty.call(defaultCfg.roles, key)) {
            checkEnv(
                key,
                JSON.stringify(
                    (defaultCfg.roles as Record<string, number>)[key],
                ),
            )
        }
    }

    checkEnv('target', defaultCfg.target)

    return {
        pass: JSON.parse(Deno.env.get('pass')!),
        roles: {
            hunter: JSON.parse(Deno.env.get('hunter')!),
            seer: JSON.parse(Deno.env.get('seer')!),
            villager: JSON.parse(Deno.env.get('villager')!),
            werewolf: JSON.parse(Deno.env.get('werewolf')!),
            witch: JSON.parse(Deno.env.get('witch')!),
        },
        target: Deno.env.get('target')! as Target,
    }
}
// JSON.parse(Deno.readTextFileSync('./backend/cfg.json'))

// todo use KV(`unstable`)
export const getTokens = (): TokenConfigType =>
    JSON.parse(Deno.readTextFileSync('./backend/tokens.json').toString())
