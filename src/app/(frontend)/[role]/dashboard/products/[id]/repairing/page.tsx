"use client";

import React, { useState } from "react";
import {
  Smartphone,
  Battery,
  Zap,
  Camera,
  Wifi,
  Volume2,
  Monitor,
  Plus,
  Minus,
  ShoppingCart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const repairOptions = [
  {
    id: 1,
    name: "Screen Replacement",
    price: 199,
    icon: Monitor,
    description: "Replace damaged or cracked screen",
    estimatedTime: "1-2 hours",
  },
  {
    id: 2,
    name: "Battery Replacement",
    price: 69,
    icon: Battery,
    description: "Replace old or faulty battery",
    estimatedTime: "30-45 minutes",
  },
  {
    id: 3,
    name: "Charging Port Repair",
    price: 79,
    icon: Zap,
    description: "Fix issues with charging or data transfer",
    estimatedTime: "45-60 minutes",
  },
  {
    id: 4,
    name: "Camera Repair",
    price: 89,
    icon: Camera,
    description: "Repair front or rear camera issues",
    estimatedTime: "1 hour",
  },
  {
    id: 5,
    name: "Wi-Fi/Bluetooth Fix",
    price: 69,
    icon: Wifi,
    description: "Resolve connectivity problems",
    estimatedTime: "30-45 minutes",
  },
  {
    id: 6,
    name: "Speaker Repair",
    price: 79,
    icon: Volume2,
    description: "Fix audio output issues",
    estimatedTime: "45-60 minutes",
  },
];

export default function RepairingPage() {
  const [selectedRepairs, setSelectedRepairs] = useState<number[]>([]);

  const toggleRepair = (id: number) => {
    setSelectedRepairs((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const totalPrice = selectedRepairs.reduce((sum, id) => {
    const repair = repairOptions.find((option) => option.id === id);
    return sum + (repair?.price || 0);
  }, 0);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Product Information */}
        <div className="md:w-1/3">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">iPhone 12 Repair</CardTitle>
              <CardDescription>Select the services you need</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center mb-4">
                <Smartphone className="w-32 h-32 text-primary" />
              </div>
              <p className="text-center text-sm text-muted-foreground mb-4">
                Model: iPhone 12
                <br />
                Color: Various
                <br />
                Storage: 64GB / 128GB / 256GB
              </p>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    Why choose our repair service?
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-4 space-y-2">
                      <li>Certified technicians</li>
                      <li>Genuine Apple parts</li>
                      <li>90-day warranty on repairs</li>
                      <li>Fast turnaround times</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </div>

        {/* Repair Options */}
        <div className="md:w-2/3">
          <h2 className="text-2xl font-bold mb-4">Available Repair Services</h2>
          <div className="grid gap-4 mb-6">
            {repairOptions.map((option) => (
              <Card
                key={option.id}
                className={`transition-colors ${
                  selectedRepairs.includes(option.id) ? "border-primary" : ""
                }`}
              >
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    <option.icon className="w-4 h-4 inline-block mr-2" />
                    {option.name}
                  </CardTitle>
                  <Badge
                    variant={
                      selectedRepairs.includes(option.id)
                        ? "default"
                        : "outline"
                    }
                  >
                    ${option.price}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-muted-foreground">
                    {option.description}
                  </p>
                  <p className="text-xs mt-1">
                    Estimated time: {option.estimatedTime}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button
                    variant={
                      selectedRepairs.includes(option.id)
                        ? "default"
                        : "outline"
                    }
                    className="w-full"
                    onClick={() => toggleRepair(option.id)}
                  >
                    {selectedRepairs.includes(option.id) ? (
                      <>
                        <Minus className="w-4 h-4 mr-2" />
                        Remove
                      </>
                    ) : (
                      <>
                        <Plus className="w-4 h-4 mr-2" />
                        Add to Cart
                      </>
                    )}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Order Summary */}
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Order Summary</CardTitle>
        </CardHeader>
        <CardContent>
          {selectedRepairs.length > 0 ? (
            <ul className="space-y-2">
              {selectedRepairs.map((id) => {
                const repair = repairOptions.find((option) => option.id === id);
                return repair ? (
                  <li
                    key={repair.id}
                    className="flex justify-between items-center"
                  >
                    <span>{repair.name}</span>
                    <span>${repair.price}</span>
                  </li>
                ) : null;
              })}
            </ul>
          ) : (
            <p className="text-muted-foreground">No repairs selected</p>
          )}
          <Separator className="my-4" />
          <div className="flex justify-between items-center font-bold">
            <span>Total</span>
            <span>${totalPrice}</span>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full" disabled={selectedRepairs.length === 0}>
            <ShoppingCart className="w-4 h-4 mr-2" />
            Proceed to Checkout
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
