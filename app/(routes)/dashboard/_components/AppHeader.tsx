import { UserButton } from "@clerk/nextjs";
import { div } from "framer-motion/client";
import Image from "next/image";
import Link from "next/link";
import path from "path";
import React from "react";
const menuoptions = [
  {
    id: 1,
    name: "Home",
    path: "/home",
  },
  {
    id: 2,
    name: "History",
    path: "/history",
  },
  {
    id: 3,
    name: "Price",
    path: "/price",
  },
  {
    id: 4,
    name: "Profil",
    path: "/profil",
  },
];
function AppHeader() {
  return (
    <div className="flex items-center justify-between p-4 shadow px-10 md:px-30 lg:px-40">
      <div>
        <Image src={"/logo.svg"} width={120} height={90} alt="logo" />
      </div>
      <div></div>
      <div className="hidden md:flex gap-4 items-center">
        {menuoptions.map((opt, index) => (
          <div className="" key={index}>
            <h2 className="hover:font-bold cursor-pointer transition-all">
              {opt.name}
            </h2>
          </div>
        ))}
      </div>
      <UserButton />
    </div>
  );
}

export default AppHeader;
