import React from "react";
import { FiLogOut } from "react-icons/fi";

function Header() {
  return (
    <header className="bg-black p-5 z-40">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div>
          <p className="text-white font-bold">UserManager</p>
        </div>
        <div>
          <a className="text-white cursor-pointer">
            <i>
              <FiLogOut />
            </i>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
