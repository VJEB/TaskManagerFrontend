import { z } from 'zod';

export const taskSchema = z.object({
    title: z.string().min(1, 'Title is required'),
    description: z.string().optional(),
    completed: z.boolean().optional().default(false),
});
