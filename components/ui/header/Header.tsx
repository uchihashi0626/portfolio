import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between items-center mt-5 mx-36">
      <h1 className="text-xl">Ryoto Uchihashi</h1>
      <div className="flex gap-5 ">
        <Link href={"#"}>Work</Link>
        <Link href={"#"}>About</Link>
      </div>
    </div>
  );
};

export default Header;
