/*
  Warnings:

  - Added the required column `establishedYear` to the `College` table without a default value. This is not possible if the table is not empty.
  - Added the required column `highestPackage` to the `College` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hostelAvailable` to the `College` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nirfRank` to the `College` table without a default value. This is not possible if the table is not empty.
  - Added the required column `website` to the `College` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "College" ADD COLUMN     "establishedYear" INTEGER NOT NULL,
ADD COLUMN     "highestPackage" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "hostelAvailable" BOOLEAN NOT NULL,
ADD COLUMN     "nirfRank" INTEGER NOT NULL,
ADD COLUMN     "website" TEXT NOT NULL;
