/*
  Warnings:

  - You are about to drop the `_taskUser` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `userId` to the `Task` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_taskUser" DROP CONSTRAINT "_taskUser_A_fkey";

-- DropForeignKey
ALTER TABLE "_taskUser" DROP CONSTRAINT "_taskUser_B_fkey";

-- AlterTable
ALTER TABLE "Task" ADD COLUMN     "userId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "_taskUser";

-- AddForeignKey
ALTER TABLE "Task" ADD CONSTRAINT "Task_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
