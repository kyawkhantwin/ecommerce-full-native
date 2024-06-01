/*
  Warnings:

  - You are about to drop the column `price` on the `Cart` table. All the data in the column will be lost.
  - You are about to drop the column `quantity` on the `Cart` table. All the data in the column will be lost.
  - Added the required column `price` to the `ProductCart` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quantity` to the `ProductCart` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Cart" DROP COLUMN "price",
DROP COLUMN "quantity";

-- AlterTable
ALTER TABLE "ProductCart" ADD COLUMN     "price" INTEGER NOT NULL,
ADD COLUMN     "quantity" INTEGER NOT NULL;
