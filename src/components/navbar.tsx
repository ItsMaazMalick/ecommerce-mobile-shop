"use client";
import React from "react";
import { Menu, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { PrevNextButton } from "./prev-next-button";

export function Navbar() {
  return (
    <header className="bg-gradient-to-r from-primary-700 to-primary-500 shadow-sm z-10 h-[70px]">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <Button variant="ghost" className="md:hidden">
          <Menu className="h-6 w-6" />
        </Button>
        {/* BACK AND FORTH BUTTON */}
        <div className="hidden md:block">
          <PrevNextButton />
        </div>
        <div />
        {/* <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1> */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="flex items-center group bg-white"
            >
              <p>
                <span className="text-black">Logged in:&nbsp;</span>
                <span className="font-bold text-primary uppercase">
                  MAAZ MALICK
                </span>
              </p>
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {/* <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem> */}
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
