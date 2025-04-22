"use client"

import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
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
  LogOut,
} from "lucide-react"
import BottomNavigation from "./BottomNavigation"

function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [aloqa, setAloqa] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userInitial, setUserInitial] = useState("")
  const [userName, setUserName] = useState("")
  const [showUserMenu, setShowUserMenu] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    checkLoginStatus()
    window.addEventListener("storage", checkLoginStatus)
    return () => window.removeEventListener("storage", checkLoginStatus)
  }, [])

  const checkLoginStatus = () => {
    const token = localStorage.getItem("token")
    const user = localStorage.getItem("user")

    if (token && user) {
      setIsLoggedIn(true)
      setUserName(user)
      setUserInitial(user.charAt(0).toUpperCase())
    } else {
      setIsLoggedIn(false)
      setUserName("")
      setUserInitial("")
    }
  }

  const handleLogout = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    localStorage.removeItem("userEmail")
    setIsLoggedIn(false)
    setShowUserMenu(false)
    navigate("/")
  }

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      setIsOpen(false)
    }
  }

  const handleUserMenuToggle = () => {
    setShowUserMenu(!showUserMenu)
  }

  return (
    <header className="bg-white shadow-md mx-auto w-[1299px] sticky top-0 z-50">
      <div className="w-[1299px] py-3 mx-auto sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-[#7000ff] font-bold text-3xl">
            market
          </Link>

          <div className="flex items-center gap-9">
            <Link to="/mahsulotlar" className="hidden md:flex items-center text-gray-700 hover:text-blue-600">
              <LayoutGrid className="h-5 w-5 mr-1" />
              <span>Mahsulotlar</span>
            </Link>

            <button
              onClick={() => setIsOpen(true)}
              className="px-4 py-2 text-blue-500 border border-blue-500 rounded-md hover:bg-blue-50 transition text-sm"
            >
              Bog'lanish
            </button>

            <button className="hidden md:flex items-center text-gray-700 hover:text-blue-600">
              <Search className="h-5 w-5 mr-1" />
              <span>Qidirish</span>
            </button>

            {isLoggedIn ? (
              <div className="relative">
                <div
                  onClick={handleUserMenuToggle}
                  className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold cursor-pointer hover:bg-blue-600 transition"
                >
                  {userInitial}
                </div>

                {showUserMenu && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200">
                    <div className="px-4 py-2 border-b border-gray-100">
                      <p className="text-sm font-medium text-gray-900">{userName}</p>
                      <p className="text-xs text-gray-500">{localStorage.getItem("userEmail")}</p>
                    </div>
                    <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Profil
                    </Link>
                    <Link to="/orders" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Buyurtmalar
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="flex items-center w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                    >
                      <LogOut className="h-4 w-4 mr-2" />
                      Chiqish
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link to="/Login">
                <button className="hidden md:flex items-center bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">
                  <span>Kirish</span>
                  <ArrowRight className="h-5 w-5 ml-2" />
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div
          onClick={handleBackdropClick}
          className="fixed inset-0 bg-black/30 flex items-center justify-center z-50 backdrop-blur-sm px-4"
        >
          {aloqa ? (
            <div></div>
          ) : (
            <div onClick={(e) => e.stopPropagation()} className="bg-white rounded-xl w-full max-w-md mx-auto shadow-lg">
              <div className="flex justify-between items-center p-5 pb-4 border-b border-gray-300">
                <h2 className="text-xl font-semibold text-gray-800 text-center mx-auto">Bog'lanish</h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="rounded-full bg-gray-100 cursor-pointer p-1 hover:bg-gray-200"
                >
                  <X className="h-5 w-5 text-gray-500" />
                </button>
              </div>

              <div className="p-5 space-y-5">
                <ContactItem icon={<Mail className="text-white" />} title="E-pochta" text="menemarket.main@gmail.com" color="bg-blue-500" />
                <ContactItem icon={<Phone className="text-white" />} title="Tel raqam" text="+998 (99) 000-00-00" color="bg-blue-500" />
                <ContactItem icon={<MessageCircle className="text-white" />} title="Telegram bot" text="@menemarket_bot" color="bg-indigo-600" />
                <ContactItem icon={<MapPin className="text-white" />} title="Manzil" text="Chilonzor, Toshkent" color="bg-blue-400" />

                <div
                  onClick={() => setAloqa(!aloqa)}
                  className="flex items-center justify-between cursor-pointer group"
                >
                  <div className="flex items-center">
                    <div className="bg-purple-500 rounded-full p-3 mr-4">
                      <Clock className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800 hover:text-blue-700">Qo'ng'iroqqa buyurtma</p>
                      <p className="text-gray-500 hover:text-gray-700">2 kun ichida siz bilan bog'lanishadi</p>
                    </div>
                  </div>
                  <ChevronRight className="h-5 w-5 text-gray-400 transform transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>

              <div className="p-4">
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-full bg-gray-200 hover:bg-gray-300 py-3 rounded-lg cursor-pointer text-gray-800 font-medium transition"
                >
                  Yopish
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      <BottomNavigation />
    </header>
  )
}

// Reusable contact info item
function ContactItem({ icon, title, text, color }) {
  return (
    <div className="flex items-center">
      <div className={`${color} rounded-full p-3 mr-4`}>
        {icon}
      </div>
      <div>
        <p className="font-medium text-gray-800">{title}</p>
        <p className="text-gray-500">{text}</p>
      </div>
    </div>
  )
}

export default Header
