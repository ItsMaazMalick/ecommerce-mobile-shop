"use server";

import prisma from "@/lib/db";
import { loginSchema } from "@/lib/schemas/login-schema";
import { signupSchema } from "@/lib/schemas/signup-schema";
import { z } from "zod";
import bcrypt from "bcryptjs";

export async function signup(values: z.infer<typeof signupSchema>) {
  try {
    const validData = signupSchema.safeParse(values);
    if (!validData.success) {
      return { error: "INvalid data provided" };
    }
    const existingUser = await prisma.user.findUnique({
      where: { email: validData.data.email },
    });
    if (existingUser) {
      return { error: "User already exists" };
    }
    const hashPassword = await bcrypt.hash(validData.data.password, 10);
    await prisma.user.create({
      data: {
        name: validData.data.name,
        email: validData.data.email,
        password: hashPassword,
      },
    });
    return { success: "Account created kindly check your email address" };
  } catch (error) {
    return { error: "Internal server error" };
  }
}

export async function login(values: z.infer<typeof loginSchema>) {
  try {
    const validData = loginSchema.safeParse(values);
    if (!validData.success) {
      return { error: "Invalid data provided" };
    }
    const existingUser = await prisma.user.findUnique({
      where: { email: validData.data.email },
    });
    if (!existingUser) {
      return { error: "Invalid credentials" };
    }
    const isValidPassword = bcrypt.compare(
      existingUser.password,
      validData.data.password
    );
    if (!isValidPassword) {
      return { error: "Invalid credentials" };
    }
    return { success: "Logged in" };
  } catch (error) {
    return { error: "Internal server error" };
  }
}
