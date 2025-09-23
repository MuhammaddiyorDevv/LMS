"use client";

import React, { useState, useEffect } from "react";

interface PriceRangeSliderProps {
  min?: number;
  max?: number;
  step?: number;
  priceGap?: number;
  onPriceChange?: (min: number, max: number) => void;
}

const PriceRangeSlider: React.FC<PriceRangeSliderProps> = ({
  min = 0,
  max = 10000000,
  step = 1000,
  priceGap = 500000,
  onPriceChange,
}) => {
  const [minPrice, setMinPrice] = useState(min);
  const [maxPrice, setMaxPrice] = useState(max);

  useEffect(() => {
    onPriceChange?.(minPrice, maxPrice);
  }, [minPrice, maxPrice]);

  const handleMinPriceChange = (value: number) => {
    const newMinPrice = Math.max(min, Math.min(value, maxPrice - priceGap));
    setMinPrice(newMinPrice);
  };

  const handleMaxPriceChange = (value: number) => {
    const newMaxPrice = Math.min(max, Math.max(value, minPrice + priceGap));
    setMaxPrice(newMaxPrice);
  };

  const handleMinRangeChange = (value: number) => {
    const newMinPrice = Math.max(min, Math.min(value, maxPrice - priceGap));
    setMinPrice(newMinPrice);
  };

  const handleMaxRangeChange = (value: number) => {
    const newMaxPrice = Math.min(max, Math.max(value, minPrice + priceGap));
    setMaxPrice(newMaxPrice);
  };

  const getLeftPercentage = () => {
    return ((minPrice - min) / (max - min)) * 100;
  };

  const getRightPercentage = () => {
    return 100 - ((maxPrice - min) / (max - min)) * 100;
  };

  return (
    <div className="w-full p-4 bg-gradient-to-br to-white rounded-2xl">
      <div className="space-y-4">
        <div className="flex items-center justify-center gap-[12px]">
          <div className="relative group">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-sm font-medium text-gray-500 z-10">
              От
            </span>
            <input
              type="number"
              value={minPrice}
              onChange={(e) => handleMinPriceChange(Number(e.target.value))}
              className="w-[140px] py-4 pl-8 pr-3 text-center text-sm font-semibold border border-[#E5E5E5] rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-500 transition-all duration-300 hover:border-gray-300"
              min={min}
              max={max}
              step={step}
              placeholder="0"
            />
          </div>
          <div className="relative group">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-sm font-medium text-gray-500 z-10">
              До
            </span>
            <input
              type="number"
              value={maxPrice}
              onChange={(e) => handleMaxPriceChange(Number(e.target.value))}
              className="w-[140px] py-4 pl-8 pr-3 text-center text-sm font-semibold border border-[#E5E5E5] rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-500 transition-all duration-300 hover:border-gray-300"
              min={min}
              max={max}
              step={step}
              placeholder="10000000"
            />
          </div>
        </div>

        <div className="relative px-4 py-6">
          <div className="h-3 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full relative overflow-hidden">
            <div
              className="absolute h-3 rounded-full"
              style={{
                left: `${getLeftPercentage()}%`,
                right: `${getRightPercentage()}%`,
                background: "linear-gradient(90deg, #006ADC 0%, #0052CC 100%)",
              }}
            />
          </div>

          <div className="relative -mt-4">
            <input
              type="range"
              min={min}
              max={max}
              value={minPrice}
              onChange={(e) => handleMinRangeChange(Number(e.target.value))}
              className="absolute w-full h-5 bg-transparent appearance-none cursor-pointer slider-thumb"
              style={{ zIndex: 1 }}
            />
            <input
              type="range"
              min={min}
              max={max}
              value={maxPrice}
              onChange={(e) => handleMaxRangeChange(Number(e.target.value))}
              className="absolute w-full h-5 bg-transparent appearance-none cursor-pointer slider-thumb"
              style={{ zIndex: 2 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceRangeSlider;
