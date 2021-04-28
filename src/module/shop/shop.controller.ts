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

  @Get('all')
  async findAll(): Promise<ShopResponse<Shop[]>> {
    return {
      code: 1,
      data: await this.ShopService.findAll(),
      message: 'Success.',
    };
  }

  @Post()
  async addOne(@Body() body: any): Promise<ShopResponse> {
    await this.ShopService.addOne(body);
    return {
      code: 1,
      message: 'Success.',
    };
  }

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

  @Delete(':_id')
  async deleteOne(@Param('_id') _id: string): Promise<ShopResponse> {
    await this.ShopService.deleteOne(_id);
    return {
      code: 1,
      message: 'Success.',
    };
  }
}
