import { z } from "zod";

export const addRepairingProductSchema = z.object({
  name: z.string().min(1, "Product name is required"),
});
