/*
  Warnings:

  - You are about to drop the `CartProduct` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "CartProduct" DROP CONSTRAINT "CartProduct_cartId_fkey";

-- DropForeignKey
ALTER TABLE "CartProduct" DROP CONSTRAINT "CartProduct_productId_fkey";

-- DropTable
DROP TABLE "CartProduct";

-- CreateTable
CREATE TABLE "ProductCart" (
    "cartId" INTEGER NOT NULL,
    "productId" INTEGER NOT NULL,

    CONSTRAINT "ProductCart_pkey" PRIMARY KEY ("cartId","productId")
);

-- AddForeignKey
ALTER TABLE "ProductCart" ADD CONSTRAINT "ProductCart_cartId_fkey" FOREIGN KEY ("cartId") REFERENCES "Cart"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductCart" ADD CONSTRAINT "ProductCart_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
