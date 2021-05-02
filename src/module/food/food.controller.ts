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
import { FoodService } from './food.service';
import { FoodDto } from './dto/food.dto';
import { Food } from './schemas/food.schema';

interface FoodResponse<T = unknown> {
  code: number;
  data?: T;
  message: string;
}

@Controller('food')
export class FoodController {
  constructor(private readonly FoodService: FoodService) { }

  // 查所有
  @Get('all')
  async findAll(): Promise<FoodResponse<Food[]>> {
    return {
      code: 1,
      data: await this.FoodService.findAll(),
      message: 'Success.',
    };
  }

  // 根据id查
  @Get('serarchId/:id')
  async findOne(@Param() param): Promise<FoodResponse<Food>> {
    return {
      code: 1,
      data: await this.FoodService.findOne(param.id),
      message: 'Success.',
    };
  }

  // 根据name查
  @Get('serarchNm')
  async serarchFood(@Query() param): Promise<FoodResponse<Food>> {
    return {
      code: 1,
      data: await this.FoodService.findByName(param.name),
      message: 'Success.',
    };
  }
}
