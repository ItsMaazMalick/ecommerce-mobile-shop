import { z } from "zod";

export const addRepairingSchema = z.object({
  product: z.string().min(1, "Product is required"),
  name: z.string().min(1, "Name is required"),
  price: z.coerce.number().min(1, "Price is required"),
  description: z.string().optional(),
  estimatedTime: z.string().optional(),
});
