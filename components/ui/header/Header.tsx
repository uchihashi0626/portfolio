import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between items-center mt-5 mx-36">
      <Link href={"/"}>
        <h1 className="text-xl hover:text-blue-700">Ryoto Uchihashi</h1>
      </Link>
      <div className="flex gap-5 ">
        <Link className="hover:text-blue-700" href={"/"}>
          Work
        </Link>
        <Link className="hover:text-blue-700" href={"#"}>
          About
        </Link>
      </div>
    </div>
  );
};

export default Header;
