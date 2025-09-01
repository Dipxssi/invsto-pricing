'use client';

import { useState } from 'react';
import Image from 'next/image';

const PRICING_TIERS = [
  { pageViews: '10K', price: 8 },
  { pageViews: '50K', price: 12 },
  { pageViews: '100K', price: 16 },
  { pageViews: '500K', price: 24 },
  { pageViews: '1M', price: 36 }
];

export default function PricingCard() {
  const [sliderValue, setSliderValue] = useState(2);
  const [isYearly, setIsYearly] = useState(false);

  const currentTier = PRICING_TIERS[sliderValue];
  const displayPrice = isYearly 
    ? Math.round(currentTier.price * 0.75) 
    : currentTier.price;

  return (
    <div className="max-w-[540px] mx-auto">
      <div className="bg-white rounded-lg shadow-[0_20px_30px_-5px_rgba(127,154,195,0.4)] p-8 md:p-12">
        
        {/* Page Views & Pricing - Desktop Layout */}
        <div className="hidden md:flex items-center justify-between mb-10">
          <div className="text-[hsl(225,20%,60%)] text-sm font-bold uppercase tracking-[0.2em]">
            {currentTier.pageViews} pageviews
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-[40px] font-extrabold text-[hsl(227,35%,25%)] leading-none">
              ${displayPrice}.00
            </span>
            <span className="text-[hsl(225,20%,60%)] text-sm">
              / {isYearly ? 'year' : 'month'}
            </span>
          </div>
        </div>

        {/* Mobile Layout - Page Views */}
        <div className="md:hidden text-center mb-8">
          <div className="text-[hsl(225,20%,60%)] text-sm font-bold uppercase tracking-[0.2em] mb-6">
            {currentTier.pageViews} pageviews
          </div>
        </div>

        {/* Custom Slider with Icon */}
        <div className="mb-8 relative">
          <input
            type="range"
            min="0"
            max="4"
            value={sliderValue}
            onChange={(e) => setSliderValue(Number(e.target.value))}
            className="w-full h-2 bg-[hsl(224,65%,95%)] rounded-lg appearance-none cursor-pointer slider"
            style={{
              background: `linear-gradient(to right, hsl(174,77%,80%) 0%, hsl(174,77%,80%) ${(sliderValue / 4) * 100}%, hsl(224,65%,95%) ${(sliderValue / 4) * 100}%, hsl(224,65%,95%) 100%)`
            }}
          />
          <div 
            className="absolute top-[-8px] w-10 h-10 pointer-events-none transition-all duration-200"
            style={{
              left: `calc(${(sliderValue / 4) * 100}% - 20px)`,
              backgroundImage: 'url(/images/icon-slider.svg)',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundSize: 'contain'
            }}
          />
        </div>

        {/* Mobile Layout - Pricing */}
        <div className="md:hidden text-center mb-8">
          <div className="flex items-baseline justify-center gap-2">
            <span className="text-[40px] font-extrabold text-[hsl(227,35%,25%)] leading-none">
              ${displayPrice}.00
            </span>
            <span className="text-[hsl(225,20%,60%)] text-sm">
              / {isYearly ? 'year' : 'month'}
            </span>
          </div>
        </div>

        {/* Monthly/Yearly Toggle */}
        <div className="flex items-center justify-center gap-4 mb-10 text-sm">
          <span className={`${!isYearly ? 'text-[hsl(227,35%,25%)]' : 'text-[hsl(225,20%,60%)]'} transition-colors`}>
            Monthly Billing
          </span>
          
          <button
            onClick={() => setIsYearly(!isYearly)}
            className={`relative w-12 h-6 rounded-full transition-all duration-200 ${
              isYearly ? 'bg-[hsl(174,86%,45%)]' : 'bg-[hsl(223,50%,87%)]'
            }`}
          >
            <div className={`absolute top-[3px] w-[18px] h-[18px] bg-white rounded-full transition-transform duration-200 ${
              isYearly ? 'translate-x-[27px]' : 'translate-x-[3px]'
            }`} />
          </button>
          
          <div className="flex items-center gap-2">
            <span className={`${isYearly ? 'text-[hsl(227,35%,25%)]' : 'text-[hsl(225,20%,60%)]'} transition-colors`}>
              Yearly Billing
            </span>
            <span className="bg-[hsl(14,92%,95%)] text-[hsl(15,100%,70%)] text-[10px] px-2 py-[2px] rounded-full font-bold">
              25% discount
            </span>
          </div>
        </div>

        <hr className="border-[hsl(224,65%,95%)] my-8" />

        {/* Features with Custom Check Icons */}
        <div className="space-y-4 mb-10">
          {[
            'Unlimited websites',
            '100% data ownership', 
            'Email reports'
          ].map((feature) => (
            <div key={feature} className="flex items-center gap-4">
              <Image 
                src="/images/icon-check.svg" 
                alt="check" 
                width={10} 
                height={8}
                className="flex-shrink-0"
              />
              <span className="text-[hsl(225,20%,60%)] text-sm">{feature}</span>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <button className="w-full bg-[hsl(227,35%,25%)] text-white py-4 rounded-full hover:bg-[hsl(227,35%,20%)] transition-colors font-bold text-sm">
          Start my trial
        </button>
      </div>
    </div>
  );
}
