import { z } from "zod";

export const addPatient = z.object({
  name: z
    .string()
    .min(3, "Name must be at least 3 characters.")
    .max(100, "Name must not exceed 100 characters."),

  email: z
    .string()
    .email("Please enter a valid email address."),

  Phone: z
    .string()
    .min(10, "Please enter a valid phone number.")
    .max(20, "Phone number is too long."),

  password: z
    .string()
    .min(8, "Password must be at least 8 characters."),

  patient_id: z
    .string()
    .regex(/^\d{14}$/, "National ID must be exactly 14 digits."),

  Gender: z.enum(["Male", "Female"]),

  Date_Birth: z
    .string()
    .min(1, "Date of birth is required."),

  Blood_Group: z.enum([
    "A+",
    "A-",
    "B+",
    "B-",
    "AB+",
    "AB-",
    "O+",
    "O-",
  ]),

  Address: z
    .string()
    .min(5, "Address must be at least 5 characters."),

  status: z.enum(["active", "inactive"]),
});

export const updatePatient = z.object({
  name: z
    .string()
    .min(3, "Name must be at least 3 characters.")
    .max(100, "Name must not exceed 100 characters.")
    .optional(),

  email: z
    .string()
    .email("Please enter a valid email address.")
    .optional(),

  Phone: z
    .string()
    .min(10, "Please enter a valid phone number.")
    .max(20, "Phone number is too long.")
    .optional(),

  password: z
    .string()
    .optional(),

  patient_id: z
    .string()
    .regex(/^\d{14}$/, "National ID must be exactly 14 digits.")
    .optional(),

  Gender: z
    .enum(["Male", "Female"])
    .optional(),

  Date_Birth: z
    .string()
    .min(1, "Date of birth is required.")
    .optional(),

  Blood_Group: z
    .enum([
      "A+",
      "A-",
      "B+",
      "B-",
      "AB+",
      "AB-",
      "O+",
      "O-",
    ])
    .optional(),

  Address: z
    .string()
    .min(5, "Address must be at least 5 characters.")
    .optional(),

  status: z
    .enum(["active", "inactive"])
    .optional(),
});

export type AddPatientInput = z.infer<typeof addPatient>;
export type UpdatePatientInput = z.infer<typeof updatePatient>;