"use client"

import { useState, useEffect } from "react"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Header from "./components/Header"
import Mahsulotlar from "./components/Mahsulotlar"
import Login from "./components/Login"
import Banner from "./components/Banner"

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  // Check authentication status when component mounts
  useEffect(() => {
    const token = localStorage.getItem("token")
    const user = localStorage.getItem("user")
    if (token && user) {
      setIsAuthenticated(true)
    }

    // Function to handle storage changes (login/logout in other tabs)
    const handleStorageChange = () => {
      const token = localStorage.getItem("token")
      const user = localStorage.getItem("user")
      setIsAuthenticated(!!(token && user))
    }

    window.addEventListener("storage", handleStorageChange)
    return () => window.removeEventListener("storage", handleStorageChange)
  }, [])

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Banner/>} />
        <Route path="/mahsulotlar" element={<Mahsulotlar />} />
        <Route path="/Login" element={isAuthenticated ? <Navigate to="/" /> : <Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
