import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class CartsService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(
    userId: number,
    createCartDto: Prisma.ProductCartCreateManyCartInput,
  ) {
    let cart = await this.databaseService.cart.findUnique({
      where: { userId },
      include: { products: true },
    });

    // If no existing cart, create a new one
    if (!cart) {
      cart = await this.databaseService.cart.create({
        data: {
          userId,
        },
        include: { products: true },
      });
    } else {
      const existingProduct = cart.products.find(
        (product) => product.productId === createCartDto.productId,
      );

      if (existingProduct) {
        throw new ConflictException('Product already exists in the cart');
      }
    }

    // Create related product carts
    await this.databaseService.productCart.create({
      data: {
        cartId: cart.id,
        productId: createCartDto.productId,
        price: createCartDto.price,
        quantity: createCartDto.quantity,
      },
    });

    return await this.databaseService.cart.findUnique({
      where: { id: cart.id },
      include: {
        products: true,
      },
    });
  }

  async findAll() {
    const cart = await this.databaseService.cart.findMany({
      include: {
        products: true,
      },
    });

    return cart;
  }
  async findUserCart(userId: number) {
    const cart = await this.databaseService.cart.findUnique({
      where: { userId },
      include: {
        products: true,
      },
    });

    if (!cart) {
      throw new NotFoundException('Cart not found');
    }

    return cart;
  }

  async findOne(id: number) {
    const cart = await this.databaseService.cart.findUnique({
      where: { id },
      include: {
        products: true,
      },
    });

    if (!cart) {
      throw new NotFoundException('Cart not found');
    }

    return cart;
  }

  async update(
    id: number,
    updateCartDto: Prisma.ProductCartUpdateManyMutationInput & {
      userId: number;
      productId: number;
    },
  ) {
    const { userId, productId, ...updateData } = updateCartDto;

    // Check if the cart exists and belongs to the user
    const cart = await this.databaseService.cart.findFirst({
      where: { id, userId },
    });
    if (!cart) {
      throw new NotFoundException(
        'Cart not found or does not belong to the user',
      );
    }

    // Check if the product exists in the cart
    const productCart = await this.databaseService.productCart.findFirst({
      where: {
        cartId: id,
        productId,
      },
    });

    if (!productCart) {
      throw new NotFoundException('Product not found in the cart');
    }

    // Update the product in the cart
    const updatedProductCart = await this.databaseService.productCart.update({
      where: {
        cartId_productId: {
          cartId: id,
          productId,
        },
      },
      data: updateData,
      include: {
        product: true,
      },
    });

    return updatedProductCart;
  }

  async remove(id: number) {
    // Check if the cart exists
    const cart = await this.databaseService.cart.findUnique({
      where: { id },
    });

    if (!cart) {
      throw new NotFoundException('Cart not found');
    }

    // Delete related product carts
    await this.databaseService.productCart.deleteMany({
      where: { cartId: id },
    });

    // Delete the cart
    return await this.databaseService.cart.delete({ where: { id } });
  }
}
