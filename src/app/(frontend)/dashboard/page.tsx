import { getAllProductWithCategoryName } from "@/actions/product";
import { getALLServices } from "@/actions/service";
import { Suspense } from "react";
import Dashboard from "./Dashboard";

export default async function DashboardPage() {
  const products = await getAllProductWithCategoryName();
  const services = await getALLServices();
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Dashboard products={products} services={services} />
    </Suspense>
  );
}
