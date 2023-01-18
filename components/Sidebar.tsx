import { NextComponentType, NextPageContext } from "next";
import { useState } from "react";
import { RiMenuUnfoldLine, RiMenuFoldLine } from "react-icons/ri";

interface Props {}

const Sidebar: NextComponentType<NextPageContext, {}, Props> = ({}) => {
  const [show, setShow] = useState(false);
  return (
    <div className="">
      <div
        onClick={() => setShow(!show)}
        className="absolute top-4 left-3 p-2 rounded-md text-xl text-white bg-gray-500 z-50 cursor-pointer"
      >
        {show ? <RiMenuFoldLine /> : <RiMenuUnfoldLine />}
      </div>

      <div
        className={`absolute top-0 ${
          show ? "left-0" : "-left-1/3"
        } bg-black min-h-screen w-1/6 z-20 transition-all duration-200 ease-in-out shadow-2xl shadow-gray-800`}
      >
        Sidebar
      </div>
    </div>
  );
};

export default Sidebar;
