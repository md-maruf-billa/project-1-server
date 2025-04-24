import { z } from "zod";
import { admin_validation } from "../admin/admin.validation";

const create_admin = z.object({
    admin: admin_validation.create,
    password: z.string({
        required_error: "Password is required",
    }),

    isDeleted: z.boolean().optional().default(false),
    role: z.string().default("ADMIN"),
    account_status: z.enum(["ACTIVE", "BLOCKED"]).default("ACTIVE"),
});


export const auth_validation = {
    create_admin
}