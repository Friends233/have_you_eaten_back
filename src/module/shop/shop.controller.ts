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
import { ShopService } from './shop.service';
import { ShopDto } from './dto/shop.dto';
import { Shop } from './schemas/shop.schema';

interface ShopResponse<T = unknown> {
  code: number;
  data?: T;
  message: string;
}

@Controller('shop')
export class ShopController {
  constructor(private readonly ShopService: ShopService) {}

  // 查所有
  @Get('all')
  async findAll(): Promise<ShopResponse<Shop[]>> {
    return {
      code: 1,
      data: await this.ShopService.findAll(),
      message: 'Success.',
    };
  }

  // 根据id查
  @Get(':id')
  async findOne(@Param() param): Promise<ShopResponse<Shop>> {
    console.log(param.id)
    return {
      code: 1,
      data: await this.ShopService.findOne(param.id),
      message: 'Success.',
    };
  }

  // 根据id编辑
  @Put(':_id')
  async editOne(
    @Param('_id') _id: string,
    @Body() body: any,
  ): Promise<ShopResponse> {
    await this.ShopService.editOne(_id, body);
    return {
      code: 1,
      message: 'Success.',
    };
  }

  // 根据id删除
  @Delete(':_id')
  async deleteOne(@Param('_id') _id: string): Promise<ShopResponse> {
    await this.ShopService.deleteOne(_id);
    return {
      code: 1,
      message: 'Success.',
    };
  }
}
