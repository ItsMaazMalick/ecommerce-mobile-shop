"use client";

import { addProduct } from "@/actions/product";
import { addService } from "@/actions/service";
import { uploadImage } from "@/actions/upload-image";
import FormSubmitButton from "@/components/form-submit-button";
import SelectInput from "@/components/inputs/select-input";
import { TextAreaInput } from "@/components/inputs/text-area-input";
import TextInput from "@/components/inputs/text-input";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { addProductSchema } from "@/lib/schemas/product-schema";
import { addRepairingSchema } from "@/lib/schemas/repairing-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

export function AddRepairingForm({ products }: any) {
  // 1. Define your form.
  const form = useForm<z.infer<typeof addRepairingSchema>>({
    resolver: zodResolver(addRepairingSchema),
    defaultValues: {
      product: "",
      name: "",
      price: 0,
      description: "",
      estimatedTime: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof addRepairingSchema>) {
    const response = await addService(values);
    form.reset();
    console.log(response);
  }
  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="">
          <div className="grid grid-cols-3 gap-4 p-4">
            <SelectInput
              label="Product"
              name="product"
              control={form.control}
              items={products}
            />
            <TextInput
              label="Service Name"
              name="name"
              autoFocus
              control={form.control}
            />
            <TextInput
              label="Price"
              name="price"
              type="number"
              control={form.control}
            />
            <TextInput
              label="Description (Optional)"
              name="description"
              control={form.control}
            />
            <TextInput
              label="Estimated Time (Optional)"
              name="estimatedTime"
              control={form.control}
            />
          </div>
          <div className="flex justify-center">
            <FormSubmitButton
              title="Add Service"
              loading={form.formState.isSubmitting}
              className="w-fit"
            />
          </div>
        </form>
      </Form>
    </div>
  );
}
