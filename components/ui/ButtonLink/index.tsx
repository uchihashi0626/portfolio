import Link from "next/link";
import React from "react";

type Props = {
  href: string;
  children: React.ReactNode;
};

export default function ButtonLink({ href, children }: Props) {
  return (
    <Link
      href={href}
      className="block bg-neutral-900 text-white py-5 px-10 rounded w-[200px] hover:opacity-80"
    >
      {children}
    </Link>
  );
}
