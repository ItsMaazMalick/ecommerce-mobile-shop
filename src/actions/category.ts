"use server";

import prisma from "@/lib/db";
import { addCategorySchema } from "@/lib/schemas/category-schema";
import { generateSlug } from "@/lib/slug";
import { z } from "zod";

export const addCategory = async (
  values: z.infer<typeof addCategorySchema>
) => {
  try {
    const session = {
      id: "672e3d5548f0b8b2a9f1d68f",
      name: "Maaz",
      email: "itsmaazmalick@gmail.com",
      role: "admin",
    };
    const validData = addCategorySchema.safeParse(values);
    if (!validData.success) {
      return { error: "Invalid data provided" };
    }
    const slug = generateSlug(validData.data.name);
    const existingCategoryWithSlug = await prisma.category.findUnique({
      where: { slug },
    });
    if (existingCategoryWithSlug) {
      return { error: "Category already exists" };
    }
    await prisma.category.create({
      data: {
        name: validData.data.name,
        slug,
        user: {
          connect: {
            id: session.id,
          },
        },
      },
    });
    return { success: "Creategory created" };
  } catch (error) {
    return { error: "Internal server error" };
  }
};

export const getAllCategories = async () => {
  try {
    const categories = await prisma.category.findMany();
    return categories;
  } catch (error) {
    return null;
  }
};
