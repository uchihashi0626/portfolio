"use client";

import { ReactTyped } from "react-typed";

type Props = {
  title: string;
  sub: string;
};

export default function Hero({ title, sub }: Props) {
  return (
    <div className="bg-no-repeat w-full bg-center flex justify-center py-8 h-[250px]">
      <ReactTyped
        className="text-2xl md:text-3xl leading-relaxed font-medium text-center py-10 text-neutral-800"
        strings={[`${title}<br>${sub}`]}
        typeSpeed={80}
        backDelay={1000}
        backSpeed={60}
        loop
      />
    </div>
  );
}
