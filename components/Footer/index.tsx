import React from "react";

export default function Footer() {
  return (
    <footer className="text-center py-4 px-6 mt-20">
      <nav className="mb-4">
        <ul className="flex justify-center gap-10 whitespace-nowrap">
          <li className="">
            <a
              href="https://x.com/ryoto_FMS"
              target="_blank"
              rel="noopener noreferrer"
            >
              X
            </a>
          </li>
          <li className="">
            <a
              href="https://github.com/uchihashi0626"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </li>
        </ul>
      </nav>
      <p className="">©︎ 2024 Ryoto Uchihashi</p>
    </footer>
  );
}
