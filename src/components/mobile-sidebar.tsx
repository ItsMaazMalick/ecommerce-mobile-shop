import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Package, ShoppingCart } from "lucide-react";
import Link from "next/link";

export function MobileSidebar({ children }: { children: React.ReactNode }) {
  return (
    <Sheet>
      <SheetTrigger asChild className="md:hidden">
        {children}
      </SheetTrigger>
      <SheetContent className="bg-gradient-to-b from-primary-700 to-primary-500 text-secondary-200">
        <SheetHeader>
          <SheetTitle className="text-2xl font-semibold mb-6">
            MobileShop
          </SheetTitle>
        </SheetHeader>

        <ul>
          <li className="mb-4">
            <Link href="/dashboard" passHref>
              <SheetClose>
                <Button
                  variant="ghost"
                  className="w-full justify-start text-white"
                >
                  <Package className="mr-2 h-4 w-4" />
                  Dashboard
                </Button>
              </SheetClose>
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/dashboard/products" passHref>
              <SheetClose>
                <Button
                  variant="ghost"
                  className="w-full justify-start text-white"
                >
                  <Package className="mr-2 h-4 w-4" />
                  Products
                </Button>
              </SheetClose>
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/dashboard/repairing-services" passHref>
              <SheetClose>
                <Button
                  variant="ghost"
                  className="w-full justify-start text-white"
                >
                  <Package className="mr-2 h-4 w-4" />
                  Repairing Services
                </Button>
              </SheetClose>
            </Link>
          </li>
          <li className="mb-4">
            <Button variant="ghost" className="w-full justify-start text-white">
              <ShoppingCart className="mr-2 h-4 w-4" />
              Orders
            </Button>
          </li>
          <li className="mb-4">
            <Link href="/dashboard/add-category" passHref>
              <SheetClose>
                <Button
                  variant="ghost"
                  className="w-full justify-start text-white"
                >
                  <Package className="mr-2 h-4 w-4" />
                  Add Category
                </Button>
              </SheetClose>
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/dashboard/add-product" passHref>
              <SheetClose>
                <Button
                  variant="ghost"
                  className="w-full justify-start text-white"
                >
                  <Package className="mr-2 h-4 w-4" />
                  Add Product
                </Button>
              </SheetClose>
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/dashboard/add-repairing" passHref>
              <SheetClose>
                <Button
                  variant="ghost"
                  className="w-full justify-start text-white"
                >
                  <Package className="mr-2 h-4 w-4" />
                  Add Repairing
                </Button>
              </SheetClose>
            </Link>
          </li>
        </ul>
      </SheetContent>
    </Sheet>
  );
}
