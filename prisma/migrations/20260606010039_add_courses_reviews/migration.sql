/*
  Warnings:

  - Added the required column `courses` to the `College` table without a default value. This is not possible if the table is not empty.
  - Added the required column `reviews` to the `College` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "College" ADD COLUMN     "courses" TEXT NOT NULL,
ADD COLUMN     "reviews" TEXT NOT NULL;
