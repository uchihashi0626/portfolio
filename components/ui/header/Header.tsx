"use client";

import Link from "next/link";
import React from "react";
import Menu from "@/components/Menu";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <div className="container mx-auto max-w-[1400px] ">
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", duration: 1, delay: 0.2, stiffness: 120 }}
        className="flex justify-between items-center h-16   text-neutral-700"
      >
        <Link href={"/"}>
          <h1 className="text-xl hover:text-blue-700 font-bold ">
            Ryoto Uchihashi
          </h1>
        </Link>
        <Menu />
      </motion.header>
    </div>
  );
};

export default Header;
