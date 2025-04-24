import bcrypt from 'bcrypt';
import config from '../config';

const hashPassword = (myPlaintextPassword: string) => bcrypt.hashSync(myPlaintextPassword, Number(config.bcrypt_salt));
const comparePassword = (myPlaintextPassword: string, hash: string) => bcrypt.compareSync(myPlaintextPassword, hash);

export const helpers = {
    hashPassword,
    comparePassword
}