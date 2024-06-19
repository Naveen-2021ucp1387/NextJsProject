import { z } from "zod";

export const messageSchema = z.object({
  content: z
    .string()
    .min(10, { message: "the content should be atleast 10 char" })
    .max(300, { message: "the content should be at Max 300 char" }),
});
