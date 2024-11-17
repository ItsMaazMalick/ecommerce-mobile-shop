import { getAllProductWithCategoryName } from "@/actions/product";
import { AddRepairingForm } from "./add-repairing-form";
import { AddRepairingProductForm } from "./add-repairing-product-form";
import { getAllRepairingProducts } from "@/actions/repairing";

export default async function AddRepairingPage() {
  const products = await getAllRepairingProducts();
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Add New Repairing Product</h1>
      <AddRepairingProductForm />

      <h1 className="text-3xl font-bold mb-8">Add New Repairing Service</h1>
      <AddRepairingForm products={products} />
    </div>
  );
}
