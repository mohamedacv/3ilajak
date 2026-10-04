import z from "zod";

export const addAdmins = z.object({
    name: z
        .string()
        .min(1, "Enter the legal name as it should appear on reports."),

    email: z
        .string()
        .email("Corporate email used for login and notifications."),

    password: z
        .string()
        .min(
            8,
            "Minimum 8 characters with symbols, numbers, and uppercase letters.",
        ),

    password_confirmation: z
        .string()
        .min(
            8,
            "Minimum 8 characters with symbols, numbers, and uppercase letters.",
        ),
});

export const updateAdmins = z.object({
    name: z
        .string()
        .min(1, "Name is required."),

    email: z
        .string()
        .email("Enter a valid email address."),

    password: z
        .string()
        .optional()
        .or(z.literal("")),

    password_confirmation: z
        .string()
        .optional()
        .or(z.literal("")),
}).refine(
    (data) => {
        if (!data.password && !data.password_confirmation) {
            return true;
        }

        if (!data.password || !data.password_confirmation) {
            return false;
        }

        return data.password === data.password_confirmation;
    },
    {
        message: "Passwords do not match.",
        path: ["password_confirmation"],
    }
);

export type AddAdminsInput = z.infer<typeof addAdmins>;
export type UpdateAdminsInput = z.infer<typeof updateAdmins>;