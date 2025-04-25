import React from 'react';

function MahsulotlarCard() {
  const productlar = [
    {
      id: 1,
      title: "Paketlar yopishtirish Mini Sealer",
      price: "37,000 so'm",
      rating: 4.8,
      image: "https://nyc3.digitaloceanspaces.com/menemarket/products/1742261999409-meneMarket-720px-20250318_063929.jpg",
    },
    {
      id: 2,
      title: "Ultra Absorb Wipe – Avtomobilingiz uchun eng yaxshi quritish sochig'i! 🚗",
      price: "29,000 so'm",
      rating: 4.8,
      image: "https://nyc3.digitaloceanspaces.com/menemarket/products/1742261999409-meneMarket-720px-20250318_063929.jpg",
    },
  
  ];

  return (
    <div className='py-10'>
        <div className=" grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-12">

{productlar.map((product) => (
  <div
    key={product.id}
    className="w-64 cursor-pointer rounded-xl overflow-hidden "
  >
    <img
      src={product.image}
      alt={product.title}
      title={product.title}
      className=""
    />
    <div className="p-3">
    <h2 className="text-sm font-medium text-gray-800 mb-2 truncate">
  {product.title}
</h2>
      <p className="text-base font-semibold text-gray-900">
        {product.price}
      </p>
      <div className="flex items-center gap-1 text-yellow-500 mt-1">
        <span className="text-sm font-medium">{product.rating}</span>
        <span>⭐</span>
      </div>
    </div>
  </div>
))}
</div>
    </div>
  );
}

export default MahsulotlarCard;
