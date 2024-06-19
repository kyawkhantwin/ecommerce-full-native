-- CreateEnum
CREATE TYPE "OrderStatus" AS ENUM ('DONE', 'PENDING');

-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "status" "OrderStatus" NOT NULL DEFAULT 'PENDING';
