export type TUser_role = "ADMIN" | "USER" | "SUPER_ADMIN"
type TAccount_status = "ACTIVE" | "BLOCKED"

export interface IUser_Interface {
    password: string;
    email: string;
    role: TUser_role;
    isDeleted: boolean;
    account_status: TAccount_status
}