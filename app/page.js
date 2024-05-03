"use client";
import { useRef } from "react";
import Cursor from "./components/Cursor";
import Header from "./components/Header";
import Button from "./components/Button";

export default function Home() {
  const stickyElement = useRef(null);
  return (
    <div className="max-w-6xl mx-auto mt-10">
      <Header ref={stickyElement} />
      <Cursor stickyElement={stickyElement} />
      <div className="mt-28">
        <Button />
      </div>
    </div>
  );
}
