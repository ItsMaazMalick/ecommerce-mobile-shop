import { getAllProductWithCategoryName } from "@/actions/product";
import Dashboard from "./Dashboard";
import { Suspense } from "react";
import { getALLServices, getServicesWithProduct } from "@/actions/service";

export default async function DashboardPage() {
  const products = await getAllProductWithCategoryName();
  const services = await getALLServices();
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Dashboard products={products} services={services} />
    </Suspense>
  );
}
