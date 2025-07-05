import { z } from 'zod';

export const CreateUserSchema = z.object({
    username: z.string().min(3, "User name must be at least 3 characters long"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
    lastName: z.string().nonempty("Last name is required"),
    firstName: z.string().optional(),
    email: z.string().email().optional()
}).strict();

export type UserCreateDTO = z.infer<typeof CreateUserSchema>;

export interface UserDTO {
    id: string;
    username: string;
    lastName: string;
    firstName: string | null;
    active: boolean;
    email: string | null;
    emailVerified: boolean;
    role: string;
}