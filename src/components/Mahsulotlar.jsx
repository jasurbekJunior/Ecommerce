import React, { useEffect, useState } from "react";
import { categories, productlar } from "../data/data";

function Mahsulotlar() {
  const [filteredArr, setFilteredArr] = useState([]);
  const [category, setCategory] = useState("barchasi");

  const handleCategory = (categoryBtn) => {
    setCategory(categoryBtn);
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    // Changed: Check if category is "barchasi" to reset filtered products
    if (category === "barchasi") {
      setFilteredArr(productlar);
      return;
    }

    // Filter products based on selected category
    const recommendedProduct = productlar.filter((item) => {
      return item.tags.some((tag) => tag.toLowerCase() === category.toLowerCase());
    });

    setFilteredArr(recommendedProduct);
  }, [category]);

  return (
    <div className="max-w-[1299px] mx-auto py-6 ">
      <h1 className="text-black text-4xl font-bold mb-4">Mahsulotlar</h1>

      {/* Changed: Map through 'categories' to generate category buttons */}
      <div className="flex overflow-x-auto gap-3 pb-2">
        {categories.map((categoryBtn, index) => (
          <button
            key={index}
            onClick={() => handleCategory(categoryBtn.toLowerCase())}
            className="whitespace-nowrap bg-[#f5f5f5] hover:bg-gray-200 rounded-lg px-5 py-3 cursor-pointer text-sm font-medium shadow-sm"
          >
            {categoryBtn}
          </button>
        ))}
      </div>

      {/* Changed: Use filteredArr to display only the filtered products */}
      <div className="flex items-center gap-6 py-6 rounded">
        {
          filteredArr.length === 0 ? (<p>yoq</p>) : ( filteredArr.map((text, index) => (
            <div key={index} className="w-64 ">
              <img
                src={text.image}
                alt={text.title}
                className="rounded-lg w-full"
              />
  
              <div className="flex-col items-center py-3">
                <h2 className="truncate font-medium">{text.title}</h2>
                <p className="text-sm font-medium">{text.price}</p>
  
                <div className="mt-2">
                  <p className="">{text.rating}⭐</p>
                </div>
              </div>
            </div>
          )))
        }
      </div>
    </div>
  );
}

export default Mahsulotlar;
