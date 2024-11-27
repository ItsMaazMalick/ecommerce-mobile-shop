import Image from "next/image";
import { Products } from "./(frontend)/dashboard/products/products";
import { getAllProductWithCategoryName } from "@/actions/product";
import { UserNavbar } from "./user-navbar";
import { RepairingServices } from "./(frontend)/dashboard/repairing-services/repairing-services";
import { getAllRepairingProducts } from "@/actions/repairing";
import MobilePhonesAndServicesPage from "./mobile-and-repair";
import { getALLGlass } from "@/actions/glass";
import { getALLScreens } from "@/actions/screen";

export default async function Home() {
  const products = await getAllProductWithCategoryName();
  const repairingProducts = await getAllRepairingProducts();
  const glass = await getALLGlass();
  const screens = await getALLScreens();
  return (
    <div className="bg-gradient-to-r from-secondary-700 to-secondary-300">
      <UserNavbar className="sticky top-0 z-50" />
      <MobilePhonesAndServicesPage
        products={products}
        repairingProducts={repairingProducts}
        glass={glass}
        screens={screens}
      />
    </div>
  );
}
