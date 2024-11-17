import Image from "next/image";
import { Products } from "./(frontend)/dashboard/products/products";
import { getAllProductWithCategoryName } from "@/actions/product";
import { UserNavbar } from "./user-navbar";
import { RepairingServices } from "./(frontend)/dashboard/repairing-services/repairing-services";
import { getAllRepairingProducts } from "@/actions/repairing";

export default async function Home() {
  const products = await getAllProductWithCategoryName();
  const repairingProducts = await getAllRepairingProducts();
  return (
    <div>
      <UserNavbar className="sticky top-0" />
      <section id="products">
        <Products products={products} link={true} />
      </section>
      <section id="services">
        <RepairingServices products={repairingProducts} link={true} />
      </section>
    </div>
  );
}
