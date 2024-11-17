import { getServicesWithProduct } from "@/actions/service";
import { Repairing } from "./repairing";
import { getRepairingProductBySlug } from "@/actions/repairing";

export default async function RepairingPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = await (await params).slug;

  const product = await getRepairingProductBySlug(slug);
  return <Repairing product={product} />;
}
