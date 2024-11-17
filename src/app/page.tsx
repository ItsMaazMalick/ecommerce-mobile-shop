import Image from "next/image";
import { Products } from "./(frontend)/dashboard/products/products";
import { getAllProductWithCategoryName } from "@/actions/product";
import { UserNavbar } from "./user-navbar";
import { RepairingServices } from "./(frontend)/dashboard/repairing-services/repairing-services";
import { getAllRepairingProducts } from "@/actions/repairing";
import MobilePhonesAndServicesPage from "./mobile-and-repair";

export default async function Home() {
  const products = await getAllProductWithCategoryName();
  const repairingProducts = await getAllRepairingProducts();
  return (
    <div className="bg-gradient-to-r from-secondary-700 to-secondary-300">
      <UserNavbar className="sticky top-0 z-50" />
      <MobilePhonesAndServicesPage
        products={products}
        repairingProducts={repairingProducts}
      />
    </div>
  );
}
