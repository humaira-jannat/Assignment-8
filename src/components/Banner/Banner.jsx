import React from "react";
import googlePlay from "../../assets/icons/google-play.png";
import appStore from "../../assets/icons/app-store.png";

const PRIMARY_COLOR = "#5A3DD9"; 
const BG_GRADIENT_CLASS = "bg-gradient-to-r from-[#5A3DD9] to-[#9B7BFF]";

function Banner() {
  return (
    <section className="w-full bg-gray-50">
      <div className="flex flex-col items-center justify-center text-center px-4 md:px-10 lg:px-20 pt-16">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4 leading-tight">
          <span className="block text-black">We Build</span>
          <span className="block">
            <span style={{ color: PRIMARY_COLOR }}>Productive</span>{" "}
            <span className="text-black">Apps</span>
          </span>
        </h1>

        <p className="max-w-3xl text-lg md:text-xl text-gray-600 mb-8 line-clamp-2">
          At HERO.IO, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting. Our goal is to fuel your drive
          for digital experiences that truly maximize your impact.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="https://play.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-white text-gray-900 font-semibold shadow-lg hover:bg-gray-100 transition"
          >
            <img src={googlePlay} alt="Google Play" className="w-6 h-6" />
            Google Play
          </a>

          <a
            href="https://www.apple.com/app-store/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-white text-gray-900 font-semibold shadow-lg hover:bg-gray-100 transition"
          >
            <img src={appStore} alt="App Store" className="w-6 h-6" />
            App Store
          </a>
        </div>

        <div className="relative mt-12 w-full max-w-4xl">
          <img
            src="/images/hero.png"
            alt="Hero Banner"
            className="w-full h-auto object-contain"
            style={{ maxHeight: "500px" }}
          />
        </div>
      </div>

      <div className={`w-full ${BG_GRADIENT_CLASS} py-16 mt-0`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h2 className="text-2xl font-bold text-center mb-10 tracking-wider">
            Trusted By Millions, Built For You
          </h2>
          <div className="flex flex-col md:flex-row justify-around text-center gap-8">
            <div className="flex flex-col items-center">
              <span className="text-sm font-medium opacity-80 mt-4">Total Downloads</span>
              <span className="text-5xl font-extrabold tracking-tighter">29.6M</span>
              <span className="text-sm font-medium opacity-80 mt-4">21% More Than Last Month</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-sm font-medium opacity-80 mt-4">Total Reviews</span>
              <span className="text-5xl font-extrabold tracking-tighter">906K</span>
              <span className="text-sm font-medium opacity-80 mt-4">40% More Than Last Month</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-sm font-medium opacity-80 mt-4">Active Apps</span>
              <span className="text-5xl font-extrabold tracking-tighter">132+</span>
              <span className="text-sm font-medium opacity-80 mt-4">31 more will Launch</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;