import dotenv from 'dotenv'
import path from 'path'


dotenv.config({ path: path.join(process.cwd(), '.env') })
export default {
    env: process.env.NODE_ENV,
    port: process.env.PORT,
    db_url: process.env.DATABASE_URL,
    bcrypt_salt: process.env.SALT,
    jwt: {
        access_secret: process.env.JWT_ACCESS_SECRET,
        access_expire: process.env.JWT_ACCESS_EXPIRE,
    }

}