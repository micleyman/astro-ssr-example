/*
  Warnings:

  - Changed the type of `postId` on the `Comment` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Comment" DROP COLUMN "postId",
ADD COLUMN     "postId" INTEGER NOT NULL;
