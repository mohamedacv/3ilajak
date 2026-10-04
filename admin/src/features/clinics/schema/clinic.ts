import { z } from "zod";

export const addClinic = z.object({
    name: z
        .string()
        .min(3, "Clinic name must be at least 3 characters"),

    phone: z
        .string()
        .min(11, "Phone number must be 11 digits")
        .max(11, "Phone number must be 11 digits"),

    address: z
        .string()
        .min(5, "Address is required"),

    max_doctors: z
        .number()
        .min(1, "Must allow at least 1 doctor"),

    payment_date: z
        .string()
        .min(1, "Payment date is required"),

    status: z.enum(["active", "inactive"], {
        error: "Status is required",
    }),

   photo: z.instanceof(File).nullable().optional(),
});

export const updateClinic = addClinic.partial();

export type AddClinicInput = z.infer<typeof addClinic>;
export type UpdateClinicInput = z.infer<typeof updateClinic>;



