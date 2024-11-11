import { getAllProductWithCategoryName } from "@/actions/product";
import { AddRepairingForm } from "./add-repairing-form";

export default async function AddRepairingPage() {
  const products = await getAllProductWithCategoryName();
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Add New Repairing Service</h1>
      <AddRepairingForm products={products} />
    </div>
  );
}
