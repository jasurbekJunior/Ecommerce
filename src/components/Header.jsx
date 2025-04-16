import React from "react";
import logo from "../images/remove.png";
import { ArrowRight, LayoutGrid, Search } from "lucide-react";

function Header() {
  return (
    <div>
      {/* header component is starting */}

      <div className="w-full border-b">
        <div className="mx-auto  flex items-center justify-between max-w-[1174px]">
          <header className="w-full flex items-center justify-between">
            <div>
              <img
                className="w-[135px] h-auto"
                src={logo}
                alt="this is logo in market"
                title="logo market"
              />
            </div>

            <div className="flex items-center space-x-4">
              <button className="flex items-center text-gray-700 px-3 py-2 hover:bg-gray-100 rounded-md">
                <LayoutGrid className="mr-2" />
                Mahsulotlar
              </button>

              <button className="px-4 py-2 text-blue-500 border border-blue-500 rounded-md hover:bg-blue-50">
                Bog'lanish
              </button>

              <button className="flex items-center text-gray-700 px-3 py-2 hover:bg-gray-100 rounded-md">
                <Search className="h-5 w-5 mr-2" />
                Qidirish
              </button>

              <button className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                <span>Kirish</span>
                <ArrowRight className="h-5 w-5 ml-2" />
              </button>
            </div>
          </header>
        </div>
      </div>
    </div>
  );
}

export default Header;
