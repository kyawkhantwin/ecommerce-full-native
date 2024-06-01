/*
  Warnings:

  - Added the required column `price` to the `ProductOrder` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quantity` to the `ProductOrder` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `ProductOrder` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ProductOrder" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "price" INTEGER NOT NULL,
ADD COLUMN     "quantity" INTEGER NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;
