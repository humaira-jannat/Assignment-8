import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";

const MyInstallations = () => {
  const [installedApps, setInstalledApps] = useState([]);
  const [sortOrder, setSortOrder] = useState("default");

  // Load installed apps from localStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("installedApps")) || [];
    setInstalledApps(saved);
  }, []);

  // Uninstall only the selected app
  const handleUninstall = (id) => {
    const updatedApps = installedApps.filter((app) => app.id !== id);
    setInstalledApps(updatedApps);
    localStorage.setItem("installedApps", JSON.stringify(updatedApps));
    toast.success("App uninstalled successfully!");
  };

  // Sort apps based on selected order
  const sortedApps = [...installedApps].sort((a, b) => {
    if (sortOrder === "high-low") return b.downloads - a.downloads;
    if (sortOrder === "low-high") return a.downloads - b.downloads;
    if (sortOrder === "size-high") return b.size - a.size;
    if (sortOrder === "size-low") return a.size - b.size;
    return 0;
  });

  return (
    <div className="min-h-screen bg-[#001931] text-gray-900 flex flex-col">
      <Toaster position="top-right" />

      <main className="flex-grow bg-[#F8FAFC] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-2">
            Your Installed Apps
          </h2>
          <p className="text-center text-gray-500 mb-10">
            Explore all the apps you've installed
          </p>

          {/* Sorting + App Count */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-3">
            <p className="text-gray-600 text-sm">
              {installedApps.length} Apps Found
            </p>
            <select
              onChange={(e) => setSortOrder(e.target.value)}
              value={sortOrder}
              className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none"
            >
              <option value="default">Sort By</option>
              <option value="high-low">Downloads: High-Low</option>
              <option value="low-high">Downloads: Low-High</option>
              <option value="size-high">Size: High-Low</option>
              <option value="size-low">Size: Low-High</option>
            </select>
          </div>

          {/* Installed Apps List */}
          <div className="bg-white shadow-md rounded-xl overflow-hidden">
            {sortedApps.length > 0 ? (
              sortedApps.map((app) => (
                <Link key={app.id} to={`/appdetails/${app.id}`}>
                  <div className="flex flex-col md:flex-row items-center justify-between border-b border-gray-200 px-6 py-4 hover:bg-gray-50 transition">
                    <div className="flex items-center gap-4 w-full md:w-auto">
                      <img
                        src={app.image}
                        alt={app.title}
                        className="w-12 h-12 rounded-md object-cover"
                      />
                      <div>
                        <h3 className="font-semibold text-gray-800">
                          {app.title}
                        </h3>
                        <div className="flex items-center gap-3 text-gray-500 text-sm mt-1">
                          <p>{(app.downloads / 1000000).toFixed(1)}M downloads</p>
                          <span>⭐ {app.ratingAvg}</span>
                          <p>{app.size} MB</p>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={(e) => {
                        e.preventDefault(); 
                        handleUninstall(app.id);
                      }}
                      className="mt-3 md:mt-0 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium transition"
                    >
                      Uninstall
                    </button>
                  </div>
                </Link>
              ))
            ) : (
              <div className="text-center py-10 text-gray-500">
                No Installed Apps Found
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default MyInstallations;

