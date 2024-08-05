"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // useEffectでスクロールを制御
  useEffect(() => {
    if (isMenuOpen) {
      // メニューが開いているときはスクロールを無効にする
      document.body.style.overflow = "hidden";
    } else {
      // メニューが閉じたときはスクロールを有効にする
      document.body.style.overflow = "";
    }

    // クリーンアップ関数でスタイルをリセット
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <div>
      <nav className="gap-12 hidden sm:flex">
        <Link className="hover:text-blue-700" href={"/work"}>
          Work
        </Link>
        <Link className="hover:text-blue-700" href={"/about"}>
          About
        </Link>
        <Link className="hover:text-blue-700" href={"/members"}>
          Members
        </Link>
      </nav>

      {/* メニューボタン */}
      <button
        type="button"
        className="sm:hidden z-50 relative" // z-indexを高く設定してボタンが常にメニューの上に表示されるようにする
        onClick={toggleMenu}
      >
        {isMenuOpen ? (
          <Image src="/close.svg" alt="閉じる" width={24} height={24} />
        ) : (
          <Image src="/menu.svg" alt="メニュー" width={24} height={24} />
        )}
      </button>

      {isMenuOpen && (
        <div className="absolute inset-0 bg-white flex flex-col items-center justify-center z-40">
          <Link
            className="hover:text-blue-700 text-xl mb-4"
            href={"/work"}
            onClick={toggleMenu}
          >
            Work
          </Link>
          <Link
            className="hover:text-blue-700 text-xl mb-4"
            href={"/about"}
            onClick={toggleMenu}
          >
            About
          </Link>
          <Link
            className="hover:text-blue-700 text-xl"
            href={"/members"}
            onClick={toggleMenu}
          >
            Members
          </Link>
        </div>
      )}
    </div>
  );
}
