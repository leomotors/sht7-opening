-- CreateTable
CREATE TABLE "counter" (
    "id" TEXT NOT NULL,
    "count" INTEGER NOT NULL DEFAULT 0
);

-- CreateIndex
CREATE UNIQUE INDEX "counter_id_key" ON "counter"("id");
