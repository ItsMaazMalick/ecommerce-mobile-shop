import { getAllProductWithCategoryName } from "@/actions/product";
import { RepairingServices } from "./repairing-services";

export default async function RepairingServicesPage() {
  const products = await getAllProductWithCategoryName();
  return <RepairingServices products={products} />;
}
