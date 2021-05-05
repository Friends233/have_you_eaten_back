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
  Query
} from '@nestjs/common';
import { ShopService } from './shop.service';
import { ShopDto } from './dto/shop.dto';
import { Shop } from './schemas/shop.schema';
import { FoodService } from '../food/food.service'

interface ShopResponse<T = unknown> {
  code: number;
  data?: T;
  message: string;
}

@Controller('shop')
export class ShopController {
  constructor(private readonly ShopService: ShopService, private readonly FoodService: FoodService) { }

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
  async findOne(@Param() param): Promise<ShopResponse<any>> {
    const data = await this.ShopService.findOne(param.id)
    const foodList = await this.FoodService.findFoodList(param.id)
    return {
      code: 1,
      data: {
        shop: data,
        food: foodList
      },
      message: 'Success.',
    };
  }

  @Post('sort')
  async findShopBySort(@Body() body): Promise<ShopResponse<Shop[]>> {
    return {
      code: 1,
      data: await this.ShopService.findOneByType(body),
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
