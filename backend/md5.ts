import { crypto } from 'std/crypto'
import { encodeHex } from 'std/encoding/hex'

const encoder = new TextEncoder()

export const md5 = (data: string) => {
    return encodeHex(crypto.subtle.digestSync('MD5', encoder.encode(data)))
}
