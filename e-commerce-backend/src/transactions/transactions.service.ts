import {
  Injectable,
  NotFoundException,
  InternalServerErrorException,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class TransactionsService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createTransactionDto: Prisma.TransactionCreateManyInput) {
    try {
      return await this.databaseService.transaction.create({
        data: createTransactionDto,
        include: {
          order: { include: { products: { include: { product: true } } } },
          user: true,
        },
      });
    } catch (error) {
      throw new InternalServerErrorException('Could not create transaction');
    }
  }

  async findAll() {
    try {
      const transaction = await this.databaseService.transaction.findMany({
        include: {
          order: { include: { products: { include: { product: true } } } },
          user: true,
        },
      });

      if (!transaction.length) {
        throw new NotFoundException('Transaction Empty');
      }
    } catch (error) {
      throw new InternalServerErrorException('Could not retrieve transactions');
    }
  }

  async findOne(id: number) {
    try {
      const transaction = await this.databaseService.transaction.findUnique({
        where: { id },
        include: {
          order: { include: { products: true } },
          user: true,
        },
      });

      if (!transaction) {
        throw new NotFoundException('Transaction not found');
      }

      return transaction;
    } catch (error) {
      throw new InternalServerErrorException(
        'Could not retrieve the transaction',
      );
    }
  }

  async remove(id: number) {
    try {
      const transaction = await this.databaseService.transaction.findUnique({
        where: { id },
        include: {
          order: { include: { products: true } },
          user: true,
        },
      });

      if (!transaction) {
        throw new NotFoundException('Transaction not found');
      }

      return await this.databaseService.transaction.delete({
        where: { id },
        include: {
          order: { include: { products: true } },
          user: true,
        },
      });
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new InternalServerErrorException(
        'Could not delete the transaction',
      );
    }
  }
}
