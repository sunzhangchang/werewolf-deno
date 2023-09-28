import { crypto } from 'std/crypto'
import { md5 } from './md5.ts'

const uuid = crypto.randomUUID(), encrypt = md5(uuid)
console.log(uuid, encrypt)
console.log(`"${encrypt}": ""`)