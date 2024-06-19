import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Query,
  ParseIntPipe,
} from '@nestjs/common';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  create(
    @Body()
    createOrderDto: {
      cartId: number;
      userId: number;
    },
  ) {
    return this.ordersService.create(createOrderDto);
  }

  @Get()
  findAll(@Query('status') status: string, @Query('latest') latest: string) {
    return this.ordersService.findAll(status, +latest);
  }

  @Get('user/:userId')
  findAllUserOrder(
    @Param('userId', ParseIntPipe) userId: number,
    @Query('status') status: string,
  ) {
    return this.ordersService.findAllUserOrder(userId, status);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.ordersService.findOne(id);
  }
  // alreay updated in transaction
  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateOrderDto: UpdateOrderDto) {
  //   return this.ordersService.update(+id, updateOrderDto);
  // }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ordersService.remove(+id);
  }
}
