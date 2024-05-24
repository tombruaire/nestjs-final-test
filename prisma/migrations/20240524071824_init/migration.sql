/*
  Warnings:

  - A unique constraint covering the columns `[nom]` on the table `Task` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Task_nom_key" ON "Task"("nom");
