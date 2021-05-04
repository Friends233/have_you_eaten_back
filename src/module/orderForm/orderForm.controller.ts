/*
 * @Description:
 * @Author: Friends233
 */
import {
  Body,
  Controller,
  Get,
  Post,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { OrderFormService } from './orderForm.service';
import { OrderFormDto } from './dto/orderForm.dto';
import { OrderForm } from './schemas/orderForm.schema';

interface OrderFormResponse<T = unknown> {
  code: number;
  data?: T;
  message: string;
}

@Controller('orderForm')
export class OrderFormController {
  constructor(private readonly OrderFormService: OrderFormService) {}

  // 查所有
  @Get('all')
  async findAll(): Promise<OrderFormResponse<OrderForm[]>> {
    return {
      code: 1,
      data: await this.OrderFormService.findAll(),
      message: 'Success.',
    };
  }

  // 根据id查
  @Get(':id')
  async findOne(@Param() param): Promise<OrderFormResponse<OrderForm>> {
    return {
      code: 1,
      data: await this.OrderFormService.findOne(param.id),
      message: 'Success.',
    };
  }
}
