import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0b2940] text-gray-300 pt-12 pb-6 mt-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <img
              src="/images/logo.png" 
              alt="Logo"
              className="w-10 h-10 rounded-lg shadow-lg"
            />
            <h2 className="text-2xl font-bold text-white">Hero.io🚀</h2>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            Discover, install, and manage the best apps in one place. Your trusted platform for modern software experiences.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <Link to="/" className="hover:text-[#7b61ff] transition">🏠 Home</Link>
            </li>
            <li>
              <Link to="/all-apps" className="hover:text-[#7b61ff] transition">📱 All Apps</Link>
            </li>
            <li>
              <Link to="/my-installations" className="hover:text-[#7b61ff] transition">💾 My Installations</Link>
            </li>
            <li>
              <a
                href="https://github.com/humaira-jannat"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#7b61ff] transition"
              >
                ⭐ Contribute 
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex gap-5">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-white text-2xl transition-transform hover:scale-110"
            >
              <FaFacebook />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-white text-2xl transition-transform hover:scale-110"
            >
              <FaInstagram />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-white text-2xl transition-transform hover:scale-110"
            >
              <FaTwitter />
            </a>
            <a
              href="https://github.com/humaira-jannat"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-white text-2xl transition-transform hover:scale-110"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-10 border-t border-gray-700 mx-6"></div>
      <div className="max-w-7xl mx-auto mt-6 px-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
        <p>© {new Date().getFullYear()} <span className="text-[#7b61ff] font-semibold">App Galaxy</span>. All rights reserved.</p>
        <p className="mt-2 md:mt-0">
          Made with ❤️ by <span className="text-[#7b61ff]">Your Name</span>
        </p>
      </div>
      <div className="mt-8 h-1 bg-gradient-to-r from-[#7b61ff] via-[#a77bff] to-[#ff7bd4] rounded-full w-3/4 mx-auto"></div>
    </footer>
  );
}
