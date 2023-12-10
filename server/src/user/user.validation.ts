import { z } from 'zod';

export const userValidationSchema = z.object({
  password: z
    .string()
    .max(20, { message: 'Password must be than 20 characters' })
    .optional(),
});
