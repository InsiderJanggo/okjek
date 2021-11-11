-- CreateTable
CREATE TABLE "Toko" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "description" TEXT,
    "image" TEXT NOT NULL,
    "partner" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Toko_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Kontak" (
    "id" TEXT NOT NULL,
    "tokoId" TEXT,
    "nomor" INTEGER,
    "website" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Kontak_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Makanan" (
    "id" TEXT NOT NULL,
    "tokoId" TEXT,
    "name" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "image" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Makanan_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Toko_name_key" ON "Toko"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Kontak_tokoId_key" ON "Kontak"("tokoId");

-- AddForeignKey
ALTER TABLE "Kontak" ADD CONSTRAINT "Kontak_tokoId_fkey" FOREIGN KEY ("tokoId") REFERENCES "Toko"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Makanan" ADD CONSTRAINT "Makanan_tokoId_fkey" FOREIGN KEY ("tokoId") REFERENCES "Toko"("id") ON DELETE SET NULL ON UPDATE CASCADE;
