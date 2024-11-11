import { AddCategoryForm } from "./add-category-form";

export default function AddCategoryPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Add New Product</h1>
      <AddCategoryForm />
    </div>
  );
}