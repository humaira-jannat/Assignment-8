import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaDownload, FaStar } from "react-icons/fa";
import data from "../../data/apps.json";

export default function AllApps() {
  const [search, setSearch] = useState("");

  const filteredApps = data.filter(app =>
    app.title.toLowerCase().includes(search.toLowerCase())
  );

  const formatDownloads = (downloads) => {
    if (downloads >= 1000000) return `${(downloads / 1000000).toFixed(1)}M+`;
    if (downloads >= 1000) return `${(downloads / 1000).toFixed(1)}K+`;
    return downloads.toLocaleString();
  };

  return (
    <div className="bg-white min-h-screen p-8">
      <div className="max-w-4xl mx-auto text-center py-10">
        <h1 className="text-5xl font-extrabold text-gray-900">All Apps</h1>
        <p className="text-lg text-gray-500 mt-2">
          Explore all apps we have developed for you.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto mb-8">
        <p className="text-xl font-semibold text-gray-800 mb-4 md:mb-0">
          ({filteredApps.length}) Apps Found
        </p>

        <div className="relative w-full max-w-xs">
          <input
            type="text"
            placeholder="Search Apps"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border border-gray-300 py-3 pl-12 pr-4 rounded-full w-full text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <svg
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>

      {filteredApps.length === 0 ? (
        <p className="text-center text-gray-500 mt-10">No apps found for your search.</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {filteredApps.map((app) => (
            <Link to={`/app/${app.id}`} key={app.id} className="block">
              <div className="bg-white shadow-md rounded-xl overflow-hidden border hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                <img src={app.image} alt={app.title} className="w-full h-40 object-cover" />
                <div className="p-4 text-left">
                  <h3 className="text-gray-800 font-semibold text-base mb-3">{app.title}</h3>
                  <div className="flex items-center justify-between text-sm">
                    <span className="flex items-center gap-1 text-green-600 font-medium">
                      <FaDownload /> {formatDownloads(app.downloads)}
                    </span>
                    <span className="flex items-center gap-1 text-yellow-500 font-medium">
                      <FaStar /> {app.ratingAvg}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-gray-500 truncate">{app.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
