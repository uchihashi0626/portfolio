import React from "react";

export default function Footer() {
  return (
    <footer className="text-center py-4 px-6 mt-20">
      <nav className="mb-4">
        <ul className="flex justify-center gap-10 whitespace-nowrap">
          <li className="">
            <a href="/news">X</a>
          </li>
          <li className="">
            <a href="/members">Github</a>
          </li>
        </ul>
      </nav>
      <p className="">©︎ 2024 Ryoto Uchihashi</p>
    </footer>
  );
}
