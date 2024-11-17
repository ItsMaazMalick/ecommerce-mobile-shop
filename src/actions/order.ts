"use server";

import prisma from "@/lib/db";

export async function createOrder(values: any) {
  try {
    if (!values.contactNumber) {
      return { error: "Contact Number is required" };
    }

    const totalPrice = values.cartItems.reduce((total: number, item: any) => {
      return total + item.price * item.quantity;
    }, 0);

    const result = await prisma.order.create({
      data: {
        contactNumber: values.contactNumber,
        email: values.email,
        price: totalPrice,
        orderStatus: "pending",
      },
    });
    const orderId = result.id;

    // Separate mobile products and repair services
    const orderItems = values.cartItems.filter(
      (item: any) => item.type === "mobile"
    );
    const repairItems = values.cartItems.filter(
      (item: any) => item.type === "repair"
    );

    // 6. Create order items for mobile products
    if (orderItems.length > 0) {
      await prisma.orderItem.createMany({
        data: orderItems.map((item: any) => ({
          orderId: orderId,
          productId: item.id, // Assuming the `id` refers to a `Product`'s ObjectId
          quantity: item.quantity,
          //   price: item.price,
        })),
      });
      console.log(
        `Created ${orderItems.length} order items for mobile products.`
      );
    }

    // 7. Create order services for repair services
    if (repairItems.length > 0) {
      await prisma.orderServicesItem.createMany({
        data: repairItems.map((item: any) => ({
          orderId: orderId,
          serviceId: item.id, // Assuming the `id` refers to a `RepairServices`'s ObjectId
          quantity: item.quantity,
          //   price: item.price,
        })),
      });
      console.log(
        `Created ${repairItems.length} order services for repair services.`
      );
    }
    return { success: "Order created..." };
  } catch {
    return { error: "Something went wrong" };
  }
}
