import { Injectable, NotFoundException } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class OrdersService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createOrderDto: { cartId: number; userId: number }) {
    // Find the cart and include its products, ensuring it belongs to the user
    const cart = await this.databaseService.cart.findFirst({
      where: { id: createOrderDto.cartId, userId: createOrderDto.userId },
      include: { products: true },
    });

    // Check if the cart exists and belongs to the user
    if (!cart) {
      throw new NotFoundException(
        'Cart not found or does not belong to the user',
      );
    }

    // Create a new order for the user
    const order = await this.databaseService.order.create({
      data: {
        user: { connect: { id: cart.userId } },
      },
    });

    // Create product orders based on the cart's products
    await this.databaseService.productOrder.createMany({
      data: cart.products.map((product) => ({
        orderId: order.id,
        productId: product.productId,
        quantity: product.quantity,
        price: product.price,
      })),
    });

    //Delete cart  and productCart after creating order
    await this.databaseService.productCart.deleteMany({
      where: { cartId: cart.id },
    });

    await this.databaseService.cart.delete({
      where: { id: cart.id, userId: cart.userId },
    });

    // Return the newly created order with its products and user details
    return await this.databaseService.order.findUnique({
      where: { id: order.id },
      include: {
        products: true,
        user: true,
      },
    });
  }

  async findAll() {
    const order = await this.databaseService.order.findMany({
      include: {
        products: true,
        user: true,
      },
    });
    if (!order) {
      throw new NotFoundException('Order Empty');
    }
    return order;
  }

  async findOne(id: number) {
    return await this.databaseService.order.findUnique({
      where: { id },
      include: {
        products: true,
        user: true,
      },
    });
  }

  // TODO: Add an update method if order status feature is added
  // async update(id: number, updateOrderDto: Prisma.ProductOrderCreateManyInput) {
  //   return await this.databaseService.productOrder.update({
  //     where: { orderId_productId: { orderId, productId } },
  //     data: updateOrderDto,
  //   });
  // }

  async remove(id: number) {
    return await this.databaseService.order.delete({
      where: { id },
      include: {
        products: true,
        user: true,
      },
    });
  }
}
