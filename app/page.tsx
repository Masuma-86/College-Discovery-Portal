import SearchBar from "./components/SearchBar";
import Navbar from "./components/Navbar";
import Link from "next/link";

async function getColleges() {
  try {
    const res = await fetch("http://localhost:3000/api/colleges", {
      cache: "no-store",
    });

    if (!res.ok) {
      return [];
    }

    return await res.json();
  } catch {
    return [];
  }
}

export default async function Home() {
  const colleges = await getColleges();

  return (
    <main className="min-h-screen bg-black text-white p-10">

      <Navbar />

      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4">
          College Discovery Portal
        </h1>

        <p className="text-gray-400 text-lg">
          Discover top engineering colleges based on
          placements, fees, ratings and packages.
        </p>

        <div className="mt-6 flex justify-center gap-4">
          <Link
            href="/predictor"
            className="bg-white text-black px-5 py-3 rounded-xl font-semibold"
          >
            College Predictor
          </Link>

          <Link
            href="/signup"
            className="bg-zinc-800 text-white px-5 py-3 rounded-xl font-semibold border border-zinc-700"
          >
            Account
          </Link>
        </div>
      </div>

      <SearchBar colleges={colleges} />
    </main>
  );
}