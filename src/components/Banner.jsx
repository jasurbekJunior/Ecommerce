"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight } from 'lucide-react'

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const timeoutRef = useRef(null)

  const slides = [
    {
      id: 1,
      title: "MAXSUS TAKLIF",
      subtitle: "PREMIUM SIFATLI IDISHLAR",
      imageUrl: "https://altaperformance.com/files/images/test.gif",
    },
    {
      id: 2,
      title: "HAMYONBOP NARXLARDA",
      subtitle: "ZAMONAVIY IDISHLAR TO'PLAMI",
      imageUrl: "https://altaperformance.com/files/images/test.gif",
    },
    {
      id: 3,
      title: "YANGI KOLLEKSIYA",
      subtitle: "OSHXONA JIHOZLARI",
      imageUrl: "https://altaperformance.com/files/images/test.gif",
    },
  ]

  const resetTimeout = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
  }

  useEffect(() => {
    resetTimeout()
    timeoutRef.current = setTimeout(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
    }, 5000)

    return () => resetTimeout()
  }, [currentSlide])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  // 🖱️ Drag handler functions
  const handleMouseDown = (e) => {
    setIsDragging(true)
    setStartX(e.clientX)
  }

  const handleMouseMove = (e) => {
    if (!isDragging) return
    const deltaX = e.clientX - startX
    if (Math.abs(deltaX) > 50) {
      if (deltaX > 0) prevSlide()
      else nextSlide()
      setIsDragging(false)
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  return (
    <div 
      className="relative w-full max-w-[1230px] h-[500px] mx-auto bg-black overflow-hidden"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {/* Slides */}
      <div className="h-full relative">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 flex items-center transition-opacity duration-700 ease-in-out ${
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <img 
              src={slide.imageUrl} 
              alt={`Slide ${slide.id}`} 
              className="object-cover w-full h-full opacity-70 select-none pointer-events-none" 
              draggable={false}
            />
            <div className="absolute z-10 px-4 sm:px-6 md:px-16 lg:px-[90px]">
              <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-4">{slide.title}</h2>
              <p className="text-yellow-500 text-2xl sm:text-3xl md:text-4xl font-semibold">{slide.subtitle}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute cursor-pointer left-4 top-1/2 -translate-y-1/2 z-20 bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-md hover:bg-gray-100 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-5 w-5 text-gray-800" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute cursor-pointer right-4 top-1/2 -translate-y-1/2 z-20 bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-md hover:bg-gray-100 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="h-5 w-5 text-gray-800" />
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-6 cursor-pointer left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentSlide ? "w-8 bg-blue-500" : "w-2 bg-white bg-opacity-50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  )
}

export default Banner
