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

  // Check login status on component mount and when localStorage changes
  useEffect(() => {
    checkLoginStatus()

    // Add event listener to check login status when localStorage changes
    window.addEventListener("storage", checkLoginStatus)

    // Cleanup event listener
    return () => {
      window.removeEventListener("storage", checkLoginStatus)
    }
  }, [])

  const checkLoginStatus = () => {
    const token = localStorage.getItem("token")
    const user = localStorage.getItem("user")

    console.log("Checking login status:", { token, user })

    if (token && user) {
      setIsLoggedIn(true)
      setUserName(user)
      setUserInitial(user.charAt(0).toUpperCase())
      console.log("User is logged in:", { userName: user, initial: user.charAt(0).toUpperCase() })
    } else {
      setIsLoggedIn(false)
      setUserName("")
      setUserInitial("")
      console.log("User is not logged in")
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
    <header className="w-[1299px] mx-auto border-b border-gray-300 bg-white z-50 py-3">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/">
          <h1 className="text-[#7000ff] font-bold text-3xl">market</h1>
        </Link>

        <div className="flex items-center space-x-4">
          <Link to="/mahsulotlar">
            <button className="md:flex items-center text-gray-700 cursor-pointer px-3 py-2 hover:bg-gray-100 rounded-md hidden">
              <LayoutGrid className="h-5 w-5 mr-2" />
              <span>Mahsulotlar</span>
            </button>
          </Link>

          <button
            onClick={() => setIsOpen(true)}
            className="px-4 py-2 text-blue-500 border cursor-pointer border-blue-500 rounded-md hover:bg-blue-50 transition"
          >
            Bog'lanish
          </button>

          <button className="md:flex items-center cursor-pointer text-gray-700 px-3 py-2 hover:bg-gray-100 rounded-md hidden">
            <Search className="h-5 w-5 mr-2" />
            <span>Qidirish</span>
          </button>

          {isLoggedIn ? (
            <div className="relative">
              <div
                onClick={handleUserMenuToggle}
                className="w-[30px] h-[30px] rounded-full bg-blue-500 text-white flex items-center justify-center font-bold cursor-pointer hover:bg-blue-600 transition"
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
              <button className="md:flex cursor-pointer items-center bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition hidden">
                <span>Kirish</span>
                <ArrowRight className="h-5 w-5 ml-2" />
              </button>
            </Link>
          )}
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div
          onClick={handleBackdropClick}
          className="fixed inset-0 bg-black/30 flex items-center justify-center z-80 backdrop-blur-sm"
        >
          {aloqa ? (
            <div></div>
          ) : (
            <div onClick={(e) => e.stopPropagation()} className="bg-white rounded-xl w-full max-w-md mx-4 shadow-lg">
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
                {/* E-pochta */}
                <div className="flex items-center cursor-pointer">
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
                <div
                  onClick={() => setAloqa(!aloqa)}
                  className="flex items-center justify-between cursor-pointer group"
                >
                  <div className="flex items-center">
                    <div className="bg-purple-500 rounded-full p-3 mr-4">
                      <Clock className="h-5 w-5 text-white" />
                    </div>
                    <div className="">
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

export default Header
