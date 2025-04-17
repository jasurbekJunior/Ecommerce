import React, { useState } from "react";
import logo from "../images/remove.png";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ChevronRight,
  Clock,
  LayoutGrid,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Search,
  X,
} from "lucide-react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      setIsOpen(false);
    }
  };

  return (
    <header className="w-full border-b bg-white z-50">
      <div className="container mx-auto px-6 py-3 flex items-center justify-between">
        <Link to="/">
          <img src={logo} alt="Logo" className="w-[104px] h-auto" />
        </Link>

        <div className="flex items-center space-x-4">
          <Link to="/mahsulotlar">
            <button className="flex items-center text-gray-700 px-3 py-2 hover:bg-gray-100 rounded-md">
              <LayoutGrid className="h-5 w-5 mr-2" />
              <span>Mahsulotlar</span>
            </button>
          </Link>

          <button
            onClick={() => setIsOpen(true)}
            className="px-4 py-2 text-blue-500 border border-blue-500 rounded-md hover:bg-blue-50 transition"
          >
            Bog'lanish
          </button>

          <button className="flex items-center text-gray-700 px-3 py-2 hover:bg-gray-100 rounded-md">
            <Search className="h-5 w-5 mr-2" />
            <span>Qidirish</span>
          </button>

          <button className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">
            <span>Kirish</span>
            <ArrowRight className="h-5 w-5 ml-2" />
          </button>
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div
          onClick={handleBackdropClick}
          className="fixed inset-0 bg-black/30 flex items-center justify-center z-50"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-xl w-full max-w-md mx-4 shadow-lg"
          >
            <div className="flex justify-between items-center p-5 pb-4 border-b">
              <h2 className="text-xl font-semibold text-gray-800 text-center mx-auto">
                Bog'lanish
              </h2>
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-full p-1 hover:bg-gray-200"
              >
                <X className="h-5 w-5 text-gray-500" />
              </button>
            </div>

            <div className="px-5 pb-4 space-y-4">
              {/* E-pochta */}
              <div className="flex items-center">
                <div className="bg-blue-500 rounded-full p-3 mr-4">
                  <Mail className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="font-medium text-gray-800">E-pochta</p>
                  <p className="text-gray-500">menemarket.main@gmail.com</p>
                </div>
              </div>

              {/* Telefon */}
              <div className="flex items-center">
                <div className="bg-blue-500 rounded-full p-3 mr-4">
                  <Phone className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="font-medium text-gray-800">Tel raqam</p>
                  <p className="text-gray-500">+998 (99) 000-00-00</p>
                </div>
              </div>

              {/* Telegram bot */}
              <div className="flex items-center">
                <div className="bg-indigo-600 rounded-full p-3 mr-4">
                  <MessageCircle className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="font-medium text-gray-800">Telegram bot</p>
                  <p className="text-gray-500">@menemarket_bot</p>
                </div>
              </div>

              {/* Manzil */}
              <div className="flex items-center">
                <div className="bg-blue-400 rounded-full p-3 mr-4">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="font-medium text-gray-800">Manzil</p>
                  <p className="text-gray-500">Chilonzor, Toshkent</p>
                </div>
              </div>

              {/* Buyurtma */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="bg-purple-500 rounded-full p-3 mr-4">
                    <Clock className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">
                      Qo'ng'iroqqa buyurtma
                    </p>
                    <p className="text-gray-500">
                      2 kun ichida siz bilan bog'lanishadi
                    </p>
                  </div>
                </div>
                <ChevronRight className="h-5 w-5 text-gray-400" />
              </div>
            </div>

            <div className="p-4">
              <button
                onClick={() => setIsOpen(false)}
                className="w-full bg-gray-200 hover:bg-gray-300 py-3 rounded-lg text-gray-800 font-medium transition"
              >
                Yopish
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
