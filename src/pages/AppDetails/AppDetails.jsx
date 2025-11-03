import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import appsData from "../../data/apps.json";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AppDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const app = appsData.find((app) => app.id === parseInt(id));
  const [installed, setInstalled] = useState(false);

  useEffect(() => {
    if (!app) {
      navigate("/app-not-found");
      return;
    }

    const installedApps = JSON.parse(localStorage.getItem("installedApps") || "[]");
    if (installedApps.includes(app.id)) {
      setInstalled(true);
    }
  }, [app, navigate]);

  const handleInstall = () => {
    if (!app || installed) return;

    const installedApps = JSON.parse(localStorage.getItem("installedApps") || "[]");
    if (!installedApps.some(a => a.id === app.id)) {
      installedApps.push(app);
      localStorage.setItem("installedApps", JSON.stringify(installedApps));
      setInstalled(true);
      toast.success(`${app.title} installed successfully!`, {
        position: "top-right",
        autoClose: 2000,
      });
    }
  };

  if (!app) {
    return (
      <div className="flex justify-center items-center h-screen text-lg font-semibold">
        Loading...
      </div>
    );
  }

  const ratingData = (app.ratings || []).map((r) => ({
    name: r.name,
    value: r.value ?? r.count ?? 0,
  })).reverse();

  const formatDownloads = (n) => {
    if (n >= 1000000) return `${(n / 1000000).toFixed(1)}M+`;
    if (n >= 1000) return `${(n / 1000).toFixed(1)}K+`;
    return n.toLocaleString();
  };

  return (
    <div className="min-h-screen bg-[#0b2940] flex justify-center py-10 px-4">
      <div className="w-full max-w-6xl bg-white rounded-2xl p-8 shadow-lg">
        
        {/* Main top area: image left, details right */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center md:items-start">
          <div className="w-44 h-44 md:w-48 md:h-48 flex-shrink-0 bg-white rounded-lg shadow-sm flex items-center justify-center">
            <img src={app.image} alt={app.title} className="w-full h-full object-cover rounded-lg" />
          </div>

          <div className="flex-1">
            <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900">{app.title}</h1>
            <p className="text-gray-500 mt-1">Developed by <span className="text-indigo-600 font-medium">{app.companyName}</span></p>
           <div className="flex flex-wrap gap-8 mt-6 text-center items-center">
      
  {/* Downloads */}
  <div className="flex items-center gap-2">
    <img src="/images/icon-downloads.png" alt="Downloads" className="w-5 h-5" />
    <div>
      <div className="text-sm text-gray-500">Downloads</div>
      <div className="text-green-600 font-bold text-lg">{formatDownloads(app.downloads)}</div>
    </div>
  </div>

  {/* Average Ratings */}
  <div className="flex items-center gap-2">
    <img src="/images/icon-ratings.png" alt="Rating" className="w-5 h-5" />
    <div>
      <div className="text-sm text-gray-500">Average Ratings</div>
      <div className="text-yellow-500 font-bold text-lg">{app.rating.toFixed(1)}</div>
    </div>
  </div>

  {/* Total Reviews */}
  <div className="flex items-center gap-2">
    <img src="/images/icon-review.png" alt="Reviews" className="w-5 h-5" />
    <div>
      <div className="text-sm text-gray-500">Total Reviews</div>
      <div className="text-gray-800 font-bold text-lg">{app.reviews.toLocaleString()}</div>
    </div>
  </div>
</div>

            
            {/* install button */}
            <div className="mt-6">
              <button
                onClick={handleInstall}
                disabled={installed}
                className={`px-6 py-2 rounded-full font-semibold shadow-md transition ${
                  installed ? "bg-gray-300 text-gray-700 cursor-not-allowed" : "bg-green-500 hover:bg-green-600 text-white"
                }`}
              >
                {installed ? "Installed" : `Install Now (${app.size} MB)`}
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-gray-200" />

        {/* Ratings chart */}
        <div>
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Ratings</h2>

          <div className="w-full bg-white rounded-lg p-4">
            <ResponsiveContainer width="100%" height={260}>
              <BarChart
                layout="vertical"
                data={ratingData}
                margin={{ top: 5, right: 40, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis type="number" tick={{ fill: "#666", fontSize: 12 }} />
                <YAxis type="category" dataKey="name" width={70} tick={{ fill: "#333", fontSize: 13 }} />
                <Tooltip />
                <Bar dataKey="value" fill="#ff9500" barSize={20} radius={[8, 8, 8, 8]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Description */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Description</h3>
          <p className="text-gray-700 leading-relaxed text-justify">{app.description}</p>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
} 