import {z} from "zod";

// Form data type automatically inferred from schema
export const userValidationSchema = z.object({
    fullName: z
        .string()
        .trim()
        .min(2, "Full name must be at least 2 characters")
        .max(50, "Full name must be less than 50 characters"),
    email: z
        .string()
        .min(1, "Email is required")
        .email("Please enter a valid email address"),
    azureId: z.string().optional(),
});

// Type automatically derived from the schema
export type UserFormData = z.infer<typeof userValidationSchema>;