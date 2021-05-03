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
import { SptService } from './spt.service';
import { FoodService } from '../food/food.service'
import { SptDto } from './dto/spt.dto';
import { Spt } from './schemas/spt.schema';

interface SptResponse<T = unknown> {
  code: number;
  data?: T;
  message: string;
}

@Controller('shoppingcart')
export class SptController {
  constructor(private readonly SptService: SptService, private readonly FoodService: FoodService) { }

  // 查所有
  @Get('all')
  async findAll(): Promise<SptResponse<Spt[]>> {
    return {
      code: 1,
      data: await this.SptService.findAll(),
      message: 'Success.',
    };
  }

  // 根据id查
  @Get(':id')
  async findOne(@Param() param): Promise<SptResponse<Spt>> {
    return {
      code: 1,
      data: await this.SptService.findOne(param.id),
      message: 'Success.',
    };
  }

  @Post('shopping')
  async addFood(@Body() body: SptDto): Promise<SptResponse<Spt>> {
    const cart = await this.SptService.findOne(body.userId)
    let flag = true
    const copy = cart.content.map(item => {
      if (item.id === body.foodId) {
        flag = false
        item.number += 1
      }
      return item
    })
    if (flag) {
      const food = await this.FoodService.findOne(body.foodId)
      const content = {
        name: food.name,
        id: food.id,
        img: food.url,
        desc: food.desc,
        number: 1,
        price: food.price
      }
      copy.push(content)
    }
    await this.SptService.addFood(body.userId, copy)
    return {
      code: 1,
      message: 'Success.',
    };
  }

  @Post('remove')
  async remove(@Body() body: SptDto): Promise<SptResponse<Spt>> {
    const cart = await this.SptService.findOne(body.userId)
    let copy = cart.content.map(item => {
      if (item.id === body.foodId) {
        if (item.number - 1 !== 0) {
          item.number -= 1
          return item
        }
      } else {
        return item
      }
    })
    copy = copy.filter(item => {
      return item
    })
    await this.SptService.addFood(body.userId, copy)
    return {
      code: 1,
      message: 'Success.',
    };
  }

  @Post('clear/:id')
  async clearAll(@Param() param): Promise<SptResponse<Spt>> {
    await this.SptService.clearAll(param.id)
    return {
      code: 1,
      message: 'Success.',
    };
  }
}
