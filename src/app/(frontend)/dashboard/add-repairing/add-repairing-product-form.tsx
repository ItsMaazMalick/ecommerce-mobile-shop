"use client";

import { addCategory } from "@/actions/category";
import { addProduct } from "@/actions/product";
import { addRepairingProduct } from "@/actions/repairing";
import { uploadImage } from "@/actions/upload-image";
import FormSubmitButton from "@/components/form-submit-button";
import TextInput from "@/components/inputs/text-input";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { addRepairingProductSchema } from "@/lib/schemas/category-schema";

import { addProductSchema } from "@/lib/schemas/product-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

export function AddRepairingProductForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof addRepairingProductSchema>>({
    resolver: zodResolver(addRepairingProductSchema),
    defaultValues: {
      name: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof addRepairingProductSchema>) {
    const response = await addRepairingProduct(values);
    console.log(response);
    form.reset();
  }
  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="">
          <TextInput
            label="Product Name"
            name="name"
            autoFocus
            control={form.control}
          />
          <div className="flex justify-center my-4">
            <FormSubmitButton
              title="Add Repairing Product"
              loading={form.formState.isSubmitting}
              className="w-fit"
            />
          </div>
        </form>
      </Form>
    </div>
  );
}
