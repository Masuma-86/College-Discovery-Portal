"use client";

import { useState } from "react";
import Link from "next/link";
import { useCompareStore } from "../store/compareStore";

export default function SearchBar({
  colleges,
}: {
  colleges: any[];
}) {
  console.log(colleges);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [cityFilter, setCityFilter] = useState("");

  const { addCollege, selectedColleges } =
    useCompareStore();

  const filtered = colleges.filter((college) => {
    const matchesSearch =
      college.name
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      college.city
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchesCity =
      cityFilter === "" ||
      college.city === cityFilter;

    return matchesSearch && matchesCity;
  });

  const sorted = [...filtered];

  if (sortBy === "rating") {
    sorted.sort((a, b) => b.rating - a.rating);
  }

  if (sortBy === "fees") {
    sorted.sort((a, b) => a.fees - b.fees);
  }

  if (sortBy === "package") {
    sorted.sort(
      (a, b) => b.avgPackage - a.avgPackage
    );
  }

  return (
    <>
      <input
        type="text"
        placeholder="Search colleges..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-4 rounded-xl border border-gray-700 bg-zinc-900 mb-4 text-white"
      />

      <div className="grid md:grid-cols-2 gap-4 mb-8">
<select
  value={cityFilter}
  onChange={(e) => setCityFilter(e.target.value)}
  className="p-4 rounded-xl border border-gray-700 bg-zinc-900 text-white"
>
  <option value="">All Cities</option>
  <option value="Hyderabad">Hyderabad</option>
  <option value="Pilani">Pilani</option>
  <option value="Vellore">Vellore</option>
  <option value="Vijayawada">Vijayawada</option>
</select>

        <select
          value={sortBy}
          onChange={(e) =>
            setSortBy(e.target.value)
          }
          className="p-4 rounded-xl border border-gray-700 bg-zinc-900 text-white"
        >
          <option value="">Sort Colleges</option>
          <option value="rating">
            Rating (High to Low)
          </option>
          <option value="fees">
            Fees (Low to High)
          </option>
          <option value="package">
            Package (High to Low)
          </option>
        </select>
      </div>

      <div className="mb-6 flex items-center justify-between">
        <p>
          Selected for comparison:{" "}
          {selectedColleges.length}/3
        </p>

        <Link
          href="/compare"
          className="bg-white text-black px-4 py-2 rounded-lg font-medium"
        >
          Compare Colleges
        </Link>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sorted.map((college) => (
          <div
            key={college.id}
            className="bg-zinc-900 border border-zinc-700 rounded-2xl p-6 hover:scale-105 transition duration-300 shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-3">
              {college.name}
            </h2>

            <div className="space-y-2 text-gray-300">
              <p>Location: {college.city}</p>

              <p>Rating: {college.rating}</p>

              <p>
                Fees: ₹
                {Number(
                  college.fees
                ).toLocaleString("en-IN")}
              </p>

              <p>
                Average Package:{" "}
                {college.avgPackage} LPA
              </p>

              <p>
                Placement Rate:{" "}
                {college.placementRate}%
              </p>
            </div>

            <div className="mt-4">
              <p className="text-sm text-gray-400">
                {college.description}
              </p>
            </div>

            <div className="flex gap-3 mt-5">
              <Link
                href={`/college/${college.id}`}
                className="bg-white text-black px-4 py-2 rounded-lg"
              >
                View Details
              </Link>

              <button
                onClick={() =>
                  addCollege(college)
                }
                className="bg-blue-600 px-4 py-2 rounded-lg"
              >
                Compare
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}