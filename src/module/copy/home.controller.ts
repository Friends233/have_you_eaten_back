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
import { HomeService } from './home.service';
import { HomeDto } from './dto/home.dto';
import { Home } from './schemas/home.schema';

interface HomeResponse<T = unknown> {
  code: number;
  data?: T;
  message: string;
}

@Controller('home')
export class HomeController {
  constructor(private readonly HomeService: HomeService) {}

  // 查所有
  @Get('all')
  async findAll(): Promise<HomeResponse<Home[]>> {
    return {
      code: 1,
      data: await this.HomeService.findAll(),
      message: 'Success.',
    };
  }

  // 根据id查
  @Get(':id')
  async findOne(@Param() param): Promise<HomeResponse<Home>> {
    return {
      code: 1,
      data: await this.HomeService.findOne(param.id),
      message: 'Success.',
    };
  }
}
