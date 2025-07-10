"use client";
import { useState } from "react";

const colleges = [
  {
    id: 1,
    name: "Oxford International College",
    admissionDates: "Aug 1 - Sep 30",
    events: "Orientation, Workshop",
    research: "AI and Robotics",
    sports: "Football, Basketball",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "Harvard University",
    admissionDates: "Sep 1 - Oct 15",
    events: "Seminars, Alumni Meet",
    research: "Medical Sciences",
    sports: "Tennis, Swimming",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "Stanford College",
    admissionDates: "Jul 15 - Aug 31",
    events: "Tech Fest, Career Fair",
    research: "Computer Science",
    sports: "Baseball, Track",
    image:
      "https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=800&q=80",
  },
];

export default function SearchSection() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    const filtered = colleges.filter(college =>
      college.name.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filtered);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 mt-6">
      <div className="flex flex-col sm:flex-row gap-2">
        <input
          type="text"
          placeholder="Search college name..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 border px-4 py-2 rounded-md shadow"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Search
        </button>
      </div>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {results.map((college) => (
          <div key={college.id} className="border rounded-lg p-4 shadow-md">
            <img
              src={college.image}
              alt={college.name}
              className="w-full h-40 object-cover rounded-md mb-3"
            />
            <h2 className="text-lg font-semibold">{college.name}</h2>
            <button className="mt-2 text-blue-600 hover:underline">
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
