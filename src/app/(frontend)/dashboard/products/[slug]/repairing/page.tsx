import { getServicesWithProduct } from "@/actions/service";
import { Repairing } from "./repairing";

export default async function RepairingPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = await (await params).slug;

  const product = await getServicesWithProduct(slug);
  return <Repairing product={product} />;
}
