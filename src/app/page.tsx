import { getALLGlass } from "@/actions/glass";
import { getAllProductWithCategoryName } from "@/actions/product";
import { getAllRepairingProducts } from "@/actions/repairing";
import { getALLScreens } from "@/actions/screen";
import MobilePhonesAndServicesPage from "./mobile-and-repair";
import { UserNavbar } from "./user-navbar";

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
