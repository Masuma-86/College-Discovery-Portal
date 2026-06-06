"use client";

import { useCompareStore } from "../store/compareStore";
import Link from "next/link";

export default function ComparePage() {
  const { selectedColleges, removeCollege } =
    useCompareStore();

  if (selectedColleges.length === 0) {
    return (
      <main className="min-h-screen bg-black text-white p-10">
        <h1 className="text-5xl font-bold mb-6">
          Compare Colleges
        </h1>

        <p className="mb-6">
          No colleges selected.
        </p>

        <Link
          href="/"
          className="bg-white text-black px-4 py-2 rounded-lg"
        >
          Back Home
        </Link>
      </main>
    );
  }

  const highestRating = Math.max(
    ...selectedColleges.map((c) => c.rating)
  );

  const highestPackage = Math.max(
    ...selectedColleges.map((c) => c.avgPackage)
  );

  const highestPlacement = Math.max(
    ...selectedColleges.map(
      (c) => c.placementRate
    )
  );

  const lowestFees = Math.min(
    ...selectedColleges.map((c) => c.fees)
  );

  const bestRank = Math.min(
    ...selectedColleges.map((c) => c.nirfRank)
  );

  return (
    <main className="min-h-screen bg-black text-white p-10">
      <h1 className="text-5xl font-bold mb-10">
        Compare Colleges
      </h1>

      <div className="overflow-x-auto">
        <table className="w-full border border-zinc-700">
          <thead>
            <tr className="bg-zinc-900">
              <th className="border p-4">
                Attribute
              </th>

              {selectedColleges.map((college) => (
                <th
                  key={college.id}
                  className="border p-4"
                >
                  {college.name}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="border p-4">
                City
              </td>

              {selectedColleges.map((college) => (
                <td
                  key={college.id}
                  className="border p-4"
                >
                  {college.city}
                </td>
              ))}
            </tr>

            <tr>
              <td className="border p-4">
                Rating
              </td>

              {selectedColleges.map((college) => (
                <td
                  key={college.id}
                  className={`border p-4 ${
                    college.rating === highestRating
                      ? "bg-green-700"
                      : ""
                  }`}
                >
                  {college.rating}
                </td>
              ))}
            </tr>

            <tr>
              <td className="border p-4">
                Fees
              </td>

              {selectedColleges.map((college) => (
                <td
                  key={college.id}
                  className={`border p-4 ${
                    college.fees === lowestFees
                      ? "bg-green-700"
                      : ""
                  }`}
                >
                  ₹
                  {Number(
                    college.fees
                  ).toLocaleString("en-IN")}
                </td>
              ))}
            </tr>

            <tr>
              <td className="border p-4">
                Avg Package
              </td>

              {selectedColleges.map((college) => (
                <td
                  key={college.id}
                  className={`border p-4 ${
                    college.avgPackage ===
                    highestPackage
                      ? "bg-green-700"
                      : ""
                  }`}
                >
                  {college.avgPackage} LPA
                </td>
              ))}
            </tr>

            <tr>
              <td className="border p-4">
                Placement Rate
              </td>

              {selectedColleges.map((college) => (
                <td
                  key={college.id}
                  className={`border p-4 ${
                    college.placementRate ===
                    highestPlacement
                      ? "bg-green-700"
                      : ""
                  }`}
                >
                  {college.placementRate}%
                </td>
              ))}
            </tr>

            <tr>
              <td className="border p-4">
                NIRF Rank
              </td>

              {selectedColleges.map((college) => (
                <td
                  key={college.id}
                  className={`border p-4 ${
                    college.nirfRank === bestRank
                      ? "bg-green-700"
                      : ""
                  }`}
                >
                  {college.nirfRank}
                </td>
              ))}
            </tr>

            <tr>
              <td className="border p-4">
                Remove
              </td>

              {selectedColleges.map((college) => (
                <td
                  key={college.id}
                  className="border p-4"
                >
                  <button
                    onClick={() =>
                      removeCollege(college.id)
                    }
                    className="bg-red-600 px-3 py-2 rounded-lg"
                  >
                    Remove
                  </button>
                </td>
              ))}
            </tr>
          </tbody>
        </table>

        <div className="mt-10 bg-zinc-900 border border-zinc-700 p-6 rounded-xl">
          <h2 className="text-2xl font-bold mb-4">
            Quick Recommendation
          </h2>

          <div className="space-y-3">
            <p>
              Best Rating:{" "}
              {
                selectedColleges.find(
                  (c) =>
                    c.rating === highestRating
                )?.name
              }
            </p>

            <p>
              Best Package:{" "}
              {
                selectedColleges.find(
                  (c) =>
                    c.avgPackage ===
                    highestPackage
                )?.name
              }
            </p>

            <p>
              Lowest Fees:{" "}
              {
                selectedColleges.find(
                  (c) =>
                    c.fees === lowestFees
                )?.name
              }
            </p>

            <p>
              Best NIRF Rank:{" "}
              {
                selectedColleges.find(
                  (c) =>
                    c.nirfRank === bestRank
                )?.name
              }
            </p>

            <p>
              Best Placement Rate:{" "}
              {
                selectedColleges.find(
                  (c) =>
                    c.placementRate ===
                    highestPlacement
                )?.name
              }
            </p>
          </div>
        </div>

        <Link
          href="/"
          className="inline-block mt-8 bg-white text-black px-4 py-2 rounded-lg"
        >
          Back Home
        </Link>
      </div>
    </main>
  );
}