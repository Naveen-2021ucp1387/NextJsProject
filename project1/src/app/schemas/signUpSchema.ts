import { z } from "zod";

export const usernameValidation = z
  .string()
  .min(2, "username should be atleast of 2 char")
  .max(20, "username should be less than 20 char")
  .regex(/^[a-zA-Z0-9_]+$/, "user name must not container special char");

export const signUpSchema = z.object({
  username: usernameValidation,
  email: z.string().email({ message: "Invalid email" }),
  password: z
    .string()
    .min(6, { message: "Weak Password, use more than 6 character" }),
});
