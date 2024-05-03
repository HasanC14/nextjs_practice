import { forwardRef } from "react";
import { FaBars, FaFacebook } from "react-icons/fa";
import Magnet from "./Magnet";

const Sticky = forwardRef(function Header(props, ref) {
  return (
    <div>
      <div
        ref={ref}
        className="size-28  border flex justify-center items-center"
      >
        <FaBars className="text-xl " />
      </div>
    </div>
  );
});

export default Sticky;
