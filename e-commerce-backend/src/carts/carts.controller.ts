import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { CartsService } from './carts.service';
import { Prisma } from '@prisma/client';

@Controller('carts')
export class CartsController {
  constructor(private readonly cartsService: CartsService) {}

  @Post()
  create(
    @Body()
    createCartDto: Prisma.ProductCartCreateManyCartInput & { userId: number },
  ) {
    const { userId, ...product } = createCartDto;
    return this.cartsService.create(userId, product);
  }

  @Get()
  findAll() {
    return this.cartsService.findAll();
  }
  @Get()
  findUserCart(@Query() userId: number) {
    return this.cartsService.findUserCart(userId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cartsService.findOne(+id);
  }
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body()
    updateCartDto: Prisma.ProductCartUpdateManyMutationInput & {
      userId: number;
      productId: number;
    },
  ) {
    return this.cartsService.update(+id, updateCartDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cartsService.remove(+id);
  }
}
