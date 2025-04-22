import { Home, LayoutGrid, Search, User } from "lucide-react";

import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function BottomNavigation() {
    const location = useLocation();
    

 const NavItems = [
  { to: "/", label: "Asosiy", icon: Home },
  { to: "/mahsulotlar", label: "Mahsulotlar", icon: LayoutGrid },
  { to: "/qidirish", label: "Qidirish", icon: Search },
  { to: "/Login", label: "Kirish", icon: User },
];

  return (
    <div>
        
        <nav className='fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-around py-2 md:hidden z-50'>
            {NavItems.map(({to,label,icon:Icon}) => {
                const isActive = location.pathname === to;
                return (
                 <Link key={to}
                  to={to}
                  className={`flex flex-col items-center text-xs hover:text-blue-600 ${
                    isActive ? "text-blue-600" : "text-gray-500"
                  }`} 
                    
                  
                 > 
                 <Icon className='h-5 w-5 mb-1'/>
                 <span>{label}</span>
                 
                 </Link>
                )
            })}
        </nav>
    </div>
  )
}

export default BottomNavigation