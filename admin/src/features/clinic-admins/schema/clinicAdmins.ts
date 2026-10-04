import z from "zod";

export const addClinicAdmins = z.object({
  name: z
    .string()
    .min(1, "Enter the legal name as it should appear on reports."),

  Email: z
    .string()
    .email("Corporate email used for login and notifications."),

  password: z
    .string()
    .min(
      8,
      "Minimum 8 characters with symbols, numbers, and uppercase letters.",
    ),

  clinic_id: z
    .number()
    .min(1, "The clinic must be selected."),

  note: z.string().optional(),

  status: z.enum(["Active", "Inactive"], {
    error: "Status is required",
  }),
});

export const updateClinicAdmins = z.object({
  name: z
    .string()
    .min(1, "Enter the legal name as it should appear on reports.")
    .optional(),

  Email: z
    .string()
    .email("Corporate email used for login and notifications.")
    .optional(),

  password: z
    .string()
    .optional()
    .or(z.literal("")),

  clinic_id: z
    .number()
    .min(1, "The clinic must be selected.")
    .optional(),

  note: z.string().optional(),

  status: z
    .enum(["Active", "Inactive"], {
      error: "Status is required",
    })
    .optional(),
});