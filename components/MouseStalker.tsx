"use client"; // これを追加

import { FC, CSSProperties } from "react";
import { animated } from "react-spring";
import useMouseStalker from "@/app/_hooks/useMouseStalker";

const initMouse = {
  width: 24,
  height: 24,
  borderRadius: 100,
  opacity: 0,
  top: 0,
  left: 0,
};

const springConfig = {
  // 変化の速さ. 大きくすると遅くなる.
  frequency: 0.2,
  // どのタイミングで減速するか. 大きくすると減速の開始が速くなる.
  damping: 2,
};

const mouseStyles: CSSProperties = {
  pointerEvents: "none",
  position: "fixed",
  zIndex: 100,
  backgroundColor: "rgba(180, 180, 0, 0.5)",
  mixBlendMode: "difference",
};

const MouseStalker: FC = () => {
  const springStyles = useMouseStalker(initMouse, springConfig, 3);

  return (
    <animated.div
      style={{
        ...mouseStyles,
        ...springStyles,
      }}
    />
  );
};

export default MouseStalker;
