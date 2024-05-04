"use client";
import Link from "next/link";
import { redirect, usePathname } from "next/navigation";
import React from "react";

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

const Nav = ({ isUserAuthenticated }: { isUserAuthenticated: boolean }) => {
  const pathName = usePathname();
  return (
    <nav>
      <ul className=" flex flex-col lg:flex-row gap-6">
        {links.map((link, index) => {
          return (
            <li key={index}>
              <Link
                href={link.path}
                className="font-bold text-[13px] uppercase tracking-[3px] hover:text-primary-hover transition-all"
              >
                {link.name}
              </Link>
            </li>
          );
        })}
      </ul>
      {!isUserAuthenticated && pathName === "/dashboard" && redirect("/")}
    </nav>
  );
};

export default Nav;
