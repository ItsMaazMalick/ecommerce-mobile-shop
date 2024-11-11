import { z } from "zod";

export const addProductSchema = z.object({
  category: z.string().min(1, "Category is required"),
  name: z.string().min(1, "Product name is required"),
  price: z.coerce.number().min(1, "Price is required"),
  description: z.string().optional(),
  display: z.string().min(1, "Display is required"),
  storage: z.string().min(1, "Storage is required"),
  chip: z.string().min(1, "Chipset is required"),
  frontCamera: z.string().min(1, "Front camera is required"),
  backCamera: z.string().min(1, "Back camera is required"),
  battery: z.string().min(1, "Battery MAH is required"),
});
