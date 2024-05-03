"use client";

import { FaFacebook } from "react-icons/fa";
import Magnet from "./Magnet";
const Button = () => {
  return (
    <div>
      <Magnet>
        <FaFacebook className="text-4xl m-5" />
      </Magnet>
    </div>
  );
};

export default Button;
