import React from 'react';
import MahsulotlarCard from './MahsulotlarCard';

function Mahsulotlar() {
  const categories = [
    "Barchasi",
    "Kiyimlar",
    "Bolalar uchun mahsulotlar",
    "Maishiy texnikalar",
    "Salomatlik",
    "Parfumeriya",
    "Aksessuarlar",
    "Avtomobil jihozlari",
    "Qurilish jihozlari",
    "Oziq-ovqat mahsulotlari",
    "Hayvonlar uchun mahsulotlar",
    "Sport uchun mahsulotlar",
    "Sevimli mashg'ulot va ijodkorlik",
    "Kitoblar"
  ];
   
 
  return (
    <div className="max-w-[1299px] mx-auto py-6 ">
      <h1 className="text-black text-4xl font-bold mb-4">Mahsulotlar</h1>

      <div className="flex overflow-x-auto gap-3 pb-2">
        {categories.map((text, index) => (
          <button
            key={index}
            className="whitespace-nowrap bg-[#f5f5f5] hover:bg-gray-200 rounded-lg px-5 py-3 cursor-pointer text-sm font-medium shadow-sm"
          >
            {text}
          </button>
        ))}
      </div>

      {/* endi cardlarni qilib chiqishni boshladim  */}

      <div>
        <MahsulotlarCard/>
      </div>
    </div>
  );
}

export default Mahsulotlar;
