import { getAllRepairingProducts } from "@/actions/repairing";
import { AddRepairingForm } from "./add-screen-form";

export default async function AddRepairingPage() {
  const products = await getAllRepairingProducts();
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Add New Screen</h1>
      <AddRepairingForm products={products} />
    </div>
  );
}
