"use client";

import React, { useState } from "react";
import { Phone, Search, ChevronDown, PenTool } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

// Mock data for mobile phones
const phones = [
  {
    id: 1,
    name: "iPhone 13 Pro",
    brand: "Apple",
    price: 999,
    image: "/placeholder.svg?height=300&width=300",
    repairServices: [
      "Screen Replacement",
      "Battery Replacement",
      "Camera Repair",
    ],
  },
  {
    id: 2,
    name: "Samsung Galaxy S21",
    brand: "Samsung",
    price: 799,
    image: "/placeholder.svg?height=300&width=300",
    repairServices: [
      "Screen Replacement",
      "Battery Replacement",
      "Charging Port Repair",
    ],
  },
  {
    id: 3,
    name: "Google Pixel 6",
    brand: "Google",
    price: 699,
    image: "/placeholder.svg?height=300&width=300",
    repairServices: [
      "Screen Replacement",
      "Battery Replacement",
      "Software Issues",
    ],
  },
  {
    id: 4,
    name: "OnePlus 9 Pro",
    brand: "OnePlus",
    price: 969,
    image: "/placeholder.svg?height=300&width=300",
    repairServices: [
      "Screen Replacement",
      "Battery Replacement",
      "Water Damage Repair",
    ],
  },
  {
    id: 5,
    name: "Xiaomi Mi 11",
    brand: "Xiaomi",
    price: 749,
    image: "/placeholder.svg?height=300&width=300",
    repairServices: [
      "Screen Replacement",
      "Battery Replacement",
      "Motherboard Repair",
    ],
  },
  {
    id: 6,
    name: "Sony Xperia 1 III",
    brand: "Sony",
    price: 1299,
    image: "/placeholder.svg?height=300&width=300",
    repairServices: [
      "Screen Replacement",
      "Battery Replacement",
      "Camera Lens Replacement",
    ],
  },
];

export default function RepairingServicesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedPhone, setSelectedPhone] = useState<(typeof phones)[0] | null>(
    null
  );

  const filteredPhones = phones.filter(
    (phone) =>
      phone.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedBrands.length === 0 || selectedBrands.includes(phone.brand))
  );

  const brands = Array.from(new Set(phones.map((p) => p.brand)));

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Mobile Phone Catalog
      </h1>

      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-grow">
          <Input
            type="text"
            placeholder="Search phones..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="w-full md:w-auto">
              <Phone className="mr-2 h-4 w-4" />
              Filter by Brand
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>Select Brands</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {brands.map((brand) => (
              <DropdownMenuCheckboxItem
                key={brand}
                checked={selectedBrands.includes(brand)}
                onCheckedChange={(checked) => {
                  setSelectedBrands(
                    checked
                      ? [...selectedBrands, brand]
                      : selectedBrands.filter((b) => b !== brand)
                  );
                }}
              >
                {brand}
              </DropdownMenuCheckboxItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Phone Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredPhones.map((phone) => (
          <Card key={phone.id} className="flex flex-col">
            <CardHeader>
              <img
                src={phone.image}
                alt={phone.name}
                className="w-full h-48 object-cover rounded-t-lg"
              />
            </CardHeader>
            <CardContent className="flex-grow">
              <CardTitle className="mb-2">{phone.name}</CardTitle>
              <p className="text-sm text-gray-500 mb-2">{phone.brand}</p>
              <p className="text-lg font-bold">${phone.price}</p>
            </CardContent>
            <CardFooter>
              <Button asChild>
                <Link href={"/"} className="w-full">
                  Services
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {filteredPhones.length === 0 && (
        <div className="text-center py-12">
          <Phone className="mx-auto h-12 w-12 text-gray-400" />
          <h3 className="mt-2 text-sm font-semibold text-gray-900">
            No phones found
          </h3>
          <p className="mt-1 text-sm text-gray-500">
            Try adjusting your search or filter to find what you're looking for.
          </p>
        </div>
      )}
    </div>
  );
}
