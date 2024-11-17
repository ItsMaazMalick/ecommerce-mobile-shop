import { getServicesWithProduct } from "@/actions/service";

import { getRepairingProductBySlug } from "@/actions/repairing";
import { Repairing } from "@/app/(frontend)/dashboard/products/[slug]/repairing/repairing";

export default async function RepairingPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = await (await params).slug;

  const product = await getRepairingProductBySlug(slug);
  return <Repairing product={product} />;
}
