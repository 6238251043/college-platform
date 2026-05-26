"use client";

import { useState } from "react";

export default function Home() {

  const [search, setSearch] = useState("");
  const [selectedState, setSelectedState] = useState("All");

  const colleges = [
    {
      name: "NIT Calicut",
      location: "Kerala",
      fees: "1.2 Lakh",
      rating: "4.5",
      placement: "92%",
    },
    {
      name: "IIT Madras",
      location: "Chennai",
      fees: "2 Lakh",
      rating: "4.8",
      placement: "98%",
    },
    {
      name: "CUSAT",
      location: "Kochi",
      fees: "85K",
      rating: "4.2",
      placement: "80%",
    },
    {
      name: "IIM Bangalore",
      location: "Bangalore",
      fees: "3 Lakh",
      rating: "4.9",
      placement: "99%",
    },
    {
      name: "NIT Trichy",
      location: "Tamil Nadu",
      fees: "1.5 Lakh",
      rating: "4.6",
      placement: "95%",
    },
    {
      name: "VIT Vellore",
      location: "Vellore",
      fees: "2.5 Lakh",
      rating: "4.3",
      placement: "85%",
    },
  ];

  const filteredColleges = colleges.filter((college) => {
    return (
      college.name.toLowerCase().includes(search.toLowerCase()) &&
      (selectedState === "All" ||
        college.location === selectedState)
    );
  });

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <h1 className="text-5xl font-bold text-center mb-10 text-black">
        College Discovery Platform
      </h1>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search colleges..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-4 border rounded-xl mb-6 text-black"
      />

      {/* Filter */}
      <select
        value={selectedState}
        onChange={(e) => setSelectedState(e.target.value)}
        className="w-full p-4 border rounded-xl mb-10 text-black"
      >
        <option>All</option>
        <option>Kerala</option>
        <option>Chennai</option>
        <option>Kochi</option>
        <option>Bangalore</option>
        <option>Tamil Nadu</option>
        <option>Vellore</option>
      </select>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {filteredColleges.map((college, index) => (

          <div
            key={index}
            className="bg-black text-white p-6 rounded-2xl shadow-lg hover:scale-105 transition duration-300"
          >

            <h2 className="text-3xl font-bold mb-4">
              {college.name}
            </h2>

            <p className="mb-2">
              📍 {college.location}
            </p>

            <p className="mb-2">
              💰 Fees: {college.fees}
            </p>

            <p className="mb-2">
              ⭐ Rating: {college.rating}
            </p>

            <p className="mb-2">
              📈 Placement: {college.placement}
            </p>

            <div className="flex gap-4 mt-6">

              <button className="bg-white text-black px-4 py-2 rounded-lg font-semibold">
                View Details
              </button>

              <button className="bg-blue-500 px-4 py-2 rounded-lg font-semibold">
                Compare
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}