/*
  Warnings:

  - The `is_completed` column on the `Todos` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Todos" DROP COLUMN "is_completed",
ADD COLUMN     "is_completed" BOOLEAN NOT NULL DEFAULT false;
