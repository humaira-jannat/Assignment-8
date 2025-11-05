import React from "react";
import { FaDownload, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";


const TopApps = () => {
  const apps = [
    {
      id: 1,
      title: "Forest: Focus For Productivity",
      image: "/images/demo-app (1).webp",
      downloads: "9M",
      rating: 5,
    },
    {
      id: 2,
      title: "SmPlan: ToDo List With Reminder",
      image: "/images/demo-app (6).webp",
      downloads: "9M",
      rating: 5,
    },
    {
      id: 3,
      title: "FLIP - Focus Timer For Study",
      image: "/images/demo-app (3).webp",
      downloads: "9M",
      rating: 5,
    },
    {
      id: 4,
      title: "Pomocat - Cute Pomodoro Timer",
      image: "/images/demo-app (4).webp",
      downloads: "9M",
      rating: 5,
    },
    {
      id: 5,
      title: "Time Planner: Schedule & Tasks",
      image: "/images/demo-app (5).webp",
      downloads: "9M",
      rating: 5,
    },
    {
      id: 6,
      title: "Morning Habits - Daily Routine",
      image: "/images/demo-app (6).webp",
      downloads: "9M",
      rating: 5,
    },
    {
      id: 7,
      title: "Focus Plant: Pomodoro Forest",
      image: "/images/demo-app (2).webp",
      downloads: "9M",
      rating: 5,
    },
    {
      id: 8,
      title: "Alarmy - Alarm Clock & Sleep",
      image: "/images/demo-app (5).webp",
      downloads: "9M",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-gray-50" id="top-apps">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Trending Apps
        </h2>
        <p className="text-gray-500 mb-12">
          Explore All Trending Apps on the Market developed by us
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {apps.map((app) => (
            <div
              key={app.id}
              className="bg-white shadow-md rounded-xl overflow-hidden border hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <img
                src={app.image}
                alt={app.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4 text-left">
                <h3 className="text-gray-800 font-semibold text-base mb-3">
                  {app.title}
                </h3>
                <div className="flex items-center justify-between text-sm">
                  <span className="flex items-center gap-1 text-green-600 font-medium">
                    <FaDownload /> {app.downloads}
                  </span>
                  <span className="flex items-center gap-1 text-yellow-500 font-medium">
                    <FaStar /> {app.rating}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Link
  to="/all-apps"
  className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300 inline-block"
>
  Show All
</Link>

      </div>
    </section>
  );
};

export default TopApps;

