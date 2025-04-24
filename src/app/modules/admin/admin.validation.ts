import { z } from 'zod';

export const create = z.object({
    name: z.string(),
    email: z.string(),
    phone: z.string().optional(),
    profilePhoto: z.string().optional(),
});


export const admin_validation = {
    create
}