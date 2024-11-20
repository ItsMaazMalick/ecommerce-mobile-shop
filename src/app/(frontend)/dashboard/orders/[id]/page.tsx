import { getOrderById } from "@/actions/order";
import { OrderPage } from "./order-page";

export default async function OrderDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params)?.id;

  const order = await getOrderById(id);

  return (
    <div>
      <OrderPage order={order} />
    </div>
  );
}
