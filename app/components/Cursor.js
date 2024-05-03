"use client";
import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Cursor({ stickyElement }) {
  const [isHovered, setIsHovered] = useState(false);
  console.log(isHovered);
  const cursorSize = isHovered ? 50 : 20;

  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 };

  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions),
  };
  const mouseMovement = (e) => {
    const { clientX, clientY } = e;

    const { left, top, width, height } =
      stickyElement.current.getBoundingClientRect();

    const center = { x: left + width / 2, y: top + height / 2 };

    if (isHovered) {
      mouse.x.set(center.x - cursorSize / 2);
      mouse.y.set(center.y - cursorSize / 2);
    } else {
      mouse.x.set(clientX - cursorSize / 2);
      mouse.y.set(clientY - cursorSize / 2);
    }
  };
  const mouseMovementOver = () => {
    setIsHovered(true);
  };
  const mouseMovementLeave = () => {
    setIsHovered(false);
  };
  useEffect(() => {
    window.addEventListener("mousemove", mouseMovement);
    stickyElement.current.addEventListener("mouseover", mouseMovementOver);
    stickyElement.current.addEventListener("mouseleave", mouseMovementLeave);
    return () => {
      window.removeEventListener("mousemove", mouseMovement);
      // stickyElement.current.removeEventListener("mouseover", mouseMovementOver);
      // stickyElement.current.removeEventListener(
      //   "mouseleave",
      //   mouseMovementLeave
      // );
    };
  });

  return (
    <motion.div
      className="size-5 border border-black rounded-full fixed"
      style={{ left: smoothMouse.x, top: smoothMouse.y }}
      animate={{ width: cursorSize, height: cursorSize }}
    ></motion.div>
  );
}
