"use client";

import { useState } from "react";
import Link from "next/link";

export default function PredictorPage() {
  const [exam, setExam] = useState("JEE Main");
  const [rank, setRank] = useState("");
  const [results, setResults] = useState<string[]>([]);

  function predict() {
    const rankValue = Number(rank);

    let recommendations: string[] = [];

    if (exam === "JEE Main") {
      if (rankValue <= 2000) {
        recommendations = [
          "IIIT Hyderabad",
          "BITS Pilani",
        ];
      } else if (rankValue <= 10000) {
        recommendations = [
          "BITS Pilani",
          "VIT Vellore",
        ];
      } else {
        recommendations = [
          "VIT Vellore",
          "CBIT",
        ];
      }
    }

    if (exam === "JEE Advanced") {
      if (rankValue <= 3000) {
        recommendations = [
          "IIIT Hyderabad",
          "BITS Pilani",
        ];
      } else {
        recommendations = [
          "VIT Vellore",
          "CBIT",
        ];
      }
    }

    if (exam === "TS EAMCET") {
      if (rankValue <= 5000) {
        recommendations = [
          "CBIT",
          "IIIT Hyderabad",
        ];
      } else {
        recommendations = ["CBIT"];
      }
    }

    setResults(recommendations);
  }

  return (
    <main className="min-h-screen bg-black text-white p-10">
      <h1 className="text-5xl font-bold mb-8">
        College Predictor
      </h1>

      <div className="max-w-xl space-y-4">
        <select
          value={exam}
          onChange={(e) => setExam(e.target.value)}
          className="w-full p-4 rounded-xl bg-zinc-900 border border-zinc-700"
        >
          <option>JEE Main</option>
          <option>JEE Advanced</option>
          <option>TS EAMCET</option>
        </select>

        <input
          type="number"
          placeholder="Enter Rank"
          value={rank}
          onChange={(e) => setRank(e.target.value)}
          className="w-full p-4 rounded-xl bg-zinc-900 border border-zinc-700"
        />

        <button
          onClick={predict}
          className="bg-white text-black px-6 py-3 rounded-xl font-semibold"
        >
          Predict Colleges
        </button>
      </div>

      {results.length > 0 && (
        <div className="mt-10">
          <h2 className="text-3xl font-bold mb-4">
            Recommended Colleges
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {results.map((college) => (
              <div
                key={college}
                className="bg-zinc-900 border border-zinc-700 p-6 rounded-xl"
              >
                <h3 className="text-2xl font-bold">
                  {college}
                </h3>
              </div>
            ))}
          </div>
        </div>
      )}

      <Link
        href="/"
        className="inline-block mt-8 bg-white text-black px-4 py-2 rounded-lg"
      >
        Back Home
      </Link>
    </main>
  );
}