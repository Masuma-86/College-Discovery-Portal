import { prisma } from "@/lib/prisma";
import Link from "next/link";

export default async function CollegePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const college = await prisma.college.findUnique({
    where: {
      id,
    },
  });

  if (!college) {
    return (
      <main className="min-h-screen bg-black text-white p-10">
        <h1 className="text-3xl font-bold">
          College Not Found
        </h1>

        <Link
          href="/"
          className="inline-block mt-6 bg-white text-black px-4 py-2 rounded-lg"
        >
          Back Home
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white p-10">
      <div className="max-w-5xl mx-auto">
        <Link
          href="/"
          className="inline-block mb-6 bg-white text-black px-4 py-2 rounded-lg"
        >
          Back Home
        </Link>

        <div className="bg-zinc-900 border border-zinc-700 rounded-2xl p-8">
          <h1 className="text-5xl font-bold mb-8">
            {college.name}
          </h1>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-2xl font-bold mb-4">
                Overview
              </h2>

              <div className="space-y-3 text-gray-300">
                <p>
                  <strong>Location:</strong> {college.city}
                </p>

                <p>
                  <strong>Established:</strong>{" "}
                  {college.establishedYear}
                </p>

                <p>
                  <strong>Rating:</strong>{" "}
                  {college.rating}
                </p>

                <p>
                  <strong>NIRF Rank:</strong>{" "}
                  {college.nirfRank}
                </p>

                <p>
                  <strong>Description:</strong>{" "}
                  {college.description}
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">
                Placements
              </h2>

              <div className="space-y-3 text-gray-300">
                <p>
                  <strong>Average Package:</strong>{" "}
                  {college.avgPackage} LPA
                </p>

                <p>
                  <strong>Highest Package:</strong>{" "}
                  {college.highestPackage} LPA
                </p>

                <p>
                  <strong>Placement Rate:</strong>{" "}
                  {college.placementRate}%
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <h2 className="text-2xl font-bold mb-4">
              Courses
            </h2>

            <div className="bg-black p-4 rounded-xl border border-zinc-700">
              {college.courses}
            </div>
          </div>

          <div className="mt-10">
            <h2 className="text-2xl font-bold mb-4">
              Student Reviews
            </h2>

            <div className="bg-black p-4 rounded-xl border border-zinc-700">
              {college.reviews}
            </div>
          </div>

          <div className="mt-10">
            <h2 className="text-2xl font-bold mb-4">
              Fees & Facilities
            </h2>

            <div className="space-y-3 text-gray-300">
              <p>
                <strong>Fees:</strong> ₹
                {Number(college.fees).toLocaleString("en-IN")}
              </p>

              <p>
                <strong>Hostel Available:</strong>{" "}
                {college.hostelAvailable
                  ? "Yes"
                  : "No"}
              </p>
            </div>
          </div>

          <div className="mt-10">
            <a
              href={college.website}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black px-5 py-3 rounded-xl font-semibold"
            >
              Visit Official Website
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}