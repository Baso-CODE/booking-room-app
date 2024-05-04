"use client";
import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { FaBars } from "react-icons/fa";
import Link from "next/link";

const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Restaurants",
    path: "/restaurants",
  },
  {
    name: "Pool",
    path: "/pool",
  },
  {
    name: "Best Deal",
    path: "/best",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger className=" text-2xl text-primary flex items-center">
        <FaBars />
      </SheetTrigger>
      <SheetContent side={"left"} className=" flex justify-center items-center">
        <nav className=" flex flex-col gap-8 text-center">
          {links.map((link, index) => {
            return (
              <Link
                key={index}
                href={link.path}
                className=" text-2xl font-primary text-primary  hover:text-accent-hover transition-all"
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
