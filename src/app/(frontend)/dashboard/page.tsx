import { getAllProductWithCategoryName } from "@/actions/product";
import Dashboard from "./Dashboard";
import { Suspense } from "react";

export default async function DashboardPage() {
  const products = await getAllProductWithCategoryName();
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Dashboard products={products} />
    </Suspense>
  );
}
