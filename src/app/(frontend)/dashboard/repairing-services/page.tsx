import { getAllProductWithCategoryName } from "@/actions/product";
import { RepairingServices } from "./repairing-services";
import { getAllRepairingProducts } from "@/actions/repairing";

export default async function RepairingServicesPage() {
  const products = await getAllRepairingProducts();
  return <RepairingServices products={products} />;
}
