import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.college.deleteMany();

  await prisma.college.createMany({
    data: [
      {
        name: "IIIT Hyderabad",
        city: "Hyderabad",
        fees: 400000,
        rating: 4.8,
        avgPackage: 28,
        placementRate: 98,
        description: "Top engineering institute",

        highestPackage: 65,
        nirfRank: 47,
        establishedYear: 1998,
        website: "https://www.iiit.ac.in",
        hostelAvailable: true,

        courses:
          "B.Tech CSE, B.Tech ECE, MS Research",

        reviews:
          "Excellent placements and academics",
      },

      {
        name: "BITS Pilani",
        city: "Pilani",
        fees: 500000,
        rating: 4.7,
        avgPackage: 24,
        placementRate: 96,
        description:
          "Premier private university",

        highestPackage: 60,
        nirfRank: 25,
        establishedYear: 1964,
        website:
          "https://www.bits-pilani.ac.in",
        hostelAvailable: true,

        courses:
          "B.E CSE, B.E ECE, Mechanical",

        reviews:
          "Amazing campus life and flexibility",
      },

      {
        name: "VIT Vellore",
        city: "Vellore",
        fees: 250000,
        rating: 4.3,
        avgPackage: 10,
        placementRate: 90,
        description:
          "Popular engineering college",

        highestPackage: 40,
        nirfRank: 11,
        establishedYear: 1984,
        website: "https://vit.ac.in",
        hostelAvailable: true,

        courses:
          "B.Tech CSE, IT, Electronics",

        reviews:
          "Good placements with huge intake",
      },

      {
  name: "KL University",
  city: "Vijayawada",
  fees: 280000,
  rating: 4.3,
  avgPackage: 9,
  placementRate: 90,
  description: "Well-known private university with strong placements.",
  highestPackage: 58,
  nirfRank: 35,
  establishedYear: 1980,
  website: "https://www.kluniversity.in",
  hostelAvailable: true,
  courses: "CSE, AI & DS, ECE, IT, Mechanical",
  reviews: "Excellent infrastructure and good placement opportunities."
},

{
  name: "Malla Reddy University",
  city: "Hyderabad",
  fees: 180000,
  rating: 4.1,
  avgPackage: 6,
  placementRate: 85,
  description: "Emerging private university in Hyderabad.",
  highestPackage: 20,
  nirfRank: 150,
  establishedYear: 2020,
  website: "https://www.mallareddyuniversity.ac.in",
  hostelAvailable: true,
  courses: "CSE, IT, AI & ML, ECE",
  reviews: "Modern campus and growing industry connections."
},

{
  name: "Anurag University",
  city: "Hyderabad",
  fees: 220000,
  rating: 4.2,
  avgPackage: 7,
  placementRate: 87,
  description: "Popular engineering-focused university.",
  highestPackage: 25,
  nirfRank: 120,
  establishedYear: 2020,
  website: "https://anurag.edu.in",
  hostelAvailable: true,
  courses: "CSE, AI, ECE, Mechanical, Civil",
  reviews: "Good faculty and decent placements."
},

{
  name: "Woxsen University",
  city: "Hyderabad",
  fees: 450000,
  rating: 4.5,
  avgPackage: 12,
  placementRate: 92,
  description: "Premium private university with global exposure.",
  highestPackage: 42,
  nirfRank: 60,
  establishedYear: 2014,
  website: "https://woxsen.edu.in",
  hostelAvailable: true,
  courses: "CSE, AI, Data Science, Business Analytics",
  reviews: "Strong industry partnerships and modern curriculum."
},

      {
        name: "CBIT",
        city: "Hyderabad",
        fees: 140000,
        rating: 4.2,
        avgPackage: 8,
        placementRate: 88,
        description:
          "Leading Hyderabad college",

        highestPackage: 22,
        nirfRank: 101,
        establishedYear: 1979,
        website:
          "https://www.cbit.ac.in",
        hostelAvailable: true,

        courses:
          "CSE, ECE, IT, Mechanical",

        reviews:
          "Strong local reputation and placements",
      },
    ],
  });

  console.log("Data inserted");
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });