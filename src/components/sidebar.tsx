"use client";
import React, { useState } from "react";
import Link from "next/link";
import { LayoutDashboard, ShoppingCart, Package, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <aside
      className={`bg-gray-800 text-white w-[256px] h-[100dvh] p-4 ${
        isOpen ? "block" : "hidden"
      } md:block`}
    >
      <nav>
        <h2 className="text-2xl font-semibold mb-6">MobileShop</h2>
        <ul>
          <li className="mb-4">
            <Link href="/admin/dashboard">
              <Button
                variant="ghost"
                className="w-full justify-start text-white"
              >
                <Package className="mr-2 h-4 w-4" />
                Dashboard
              </Button>
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/admin/dashboard/products">
              <Button
                variant="ghost"
                className="w-full justify-start text-white"
              >
                <Package className="mr-2 h-4 w-4" />
                Products
              </Button>
            </Link>
          </li>
          <li className="mb-4">
            <Button variant="ghost" className="w-full justify-start text-white">
              <ShoppingCart className="mr-2 h-4 w-4" />
              Orders
            </Button>
          </li>
          <li className="mb-4">
            <Link href="/admin/dashboard/add-category">
              <Button
                variant="ghost"
                className="w-full justify-start text-white"
              >
                <Package className="mr-2 h-4 w-4" />
                Add Category
              </Button>
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/admin/dashboard/add-product">
              <Button
                variant="ghost"
                className="w-full justify-start text-white"
              >
                <Package className="mr-2 h-4 w-4" />
                Add Product
              </Button>
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/admin/dashboard/repairing-services">
              <Button
                variant="ghost"
                className="w-full justify-start text-white"
              >
                <Package className="mr-2 h-4 w-4" />
                Repairing Services
              </Button>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
