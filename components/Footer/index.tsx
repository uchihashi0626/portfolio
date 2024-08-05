import React from "react";

export default function Footer() {
  return (
    <footer className="text-center py-4 px-6 mt-20">
      <nav className="mb-4">
        <ul className="flex justify-center gap-10 whitespace-nowrap">
          <li className="">
            <a href="/news">ニュース</a>
          </li>
          <li className="">
            <a href="/members">メンバー</a>
          </li>
          <li className="">
            <a href="/contact">お問い合わせ</a>
          </li>
        </ul>
      </nav>
      <p className="">© SIMPLE. All Rights Reserved 2024</p>
    </footer>
  );
}
