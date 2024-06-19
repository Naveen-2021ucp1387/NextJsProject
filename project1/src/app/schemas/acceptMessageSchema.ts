import { z } from "zod";

export const AcceptMessageSchema = z.object({
  acceptedMessages: z.boolean(),
});
