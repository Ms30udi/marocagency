import React, { Suspense, lazy } from 'react';

// Lazy load Spline for better performance
const Spline = lazy(() => import('@splinetool/react-spline'));

export default function HeroSection() {
  return (
    <section className="relative w-full h-[118vh] bg-linear-to-br from-black via-[#092f73] to-black overflow-hidden">
      {/* Spotlight Effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-40 left-0 md:left-60 md:-top-20 w-[500px] h-[500px] opacity-30">
          <div className="w-full h-full bg-gradient-radial from-[#092f73]/40 via-[#092f73]/20 to-transparent blur-3xl animate-pulse"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto h-full flex flex-col lg:flex-row items-center px-4 sm:px-6 lg:px-8">
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left space-y-6 py-12 lg:py-0">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-linear-to-r from-white via-blue-200 to-[#092f73]">
            Maroc Agency
          </h1>
          <p className="text-xl md:text-2xl text-white max-w-2xl mx-auto lg:mx-0 font-semibold">
            Empowering Your Business with Intelligent AI Solutions
          </p>
          <p className="text-base md:text-lg text-gray-300 max-w-lg mx-auto lg:mx-0">
            Transform your digital presence with cutting-edge artificial intelligence. 
            We create immersive experiences that capture attention and drive results.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
            <a
              href="/contact"
              className="px-8 py-3 bg-white text-[#092f73] font-medium rounded-lg hover:bg-[#0a3a8f] hover:text-white transition-all hover:scale-105 shadow-lg shadow-[#092f73]/50"
            >
              Get Started
            </a>
            <a
              href="/works"
              className="px-8 py-3 bg-transparent border-2 border-[#ffffff] text-white font-medium rounded-lg hover:bg-[#092f73]/20 transition-all hover:scale-105"
            >
              View Our Work
            </a>
          </div>
        </div>

        {/* Right Content - 3D Scene */}
        <div className="flex-1 w-full h-[400px] lg:h-[600px] relative">
          <Suspense 
            fallback={
              <div className="w-full h-full flex items-center justify-center">
                <div className="w-16 h-16 border-4 border-[#092f73] border-t-white rounded-full animate-spin"></div>
              </div>
            }
          >
            <Spline
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
            />
          </Suspense>
        </div>
      </div>

      {/* Gradient Overlay at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-white dark:from-gray-900 to-transparent z-20"></div>
    </section>
  );
}