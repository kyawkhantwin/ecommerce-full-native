import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class CategoriesService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createCategoryDto: Prisma.CategoryCreateInput) {
    try {
      console.log(createCategoryDto);
      return await this.databaseService.category.create({
        data: createCategoryDto,
      });
    } catch (error) {
      throw new ConflictException(error);
    }
  }

  async findAll() {
    const category = await this.databaseService.category.findMany();
    if (!category.length) {
      throw new NotFoundException('Category Empty');
    }
    return category;
  }

  async findOne(id: number) {
    const category = await this.databaseService.category.findUnique({
      where: { id },
    });

    if (!category) {
      throw new NotFoundException('Category not found');
    }

    return category;
  }

  async update(id: number, updateCategoryDto: Prisma.CategoryUpdateInput) {
    try {
      const category = await this.databaseService.category.findUnique({
        where: { id },
      });

      if (!category) {
        throw new NotFoundException('Category not found');
      }

      return await this.databaseService.category.update({
        where: { id },
        data: updateCategoryDto,
      });
    } catch (error) {
      throw new ConflictException('Category could not be updated');
    }
  }

  async remove(id: number) {
    const category = await this.databaseService.category.findUnique({
      where: { id },
    });

    if (!category) {
      throw new NotFoundException('Category not found');
    }

    return await this.databaseService.category.delete({ where: { id } });
  }
}
