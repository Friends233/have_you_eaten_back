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
import { SptDto } from './dto/spt.dto';
import { Spt } from './schemas/spt.schema';

interface SptResponse<T = unknown> {
  code: number;
  data?: T;
  message: string;
}

@Controller('shoppingcart')
export class SptController {
  constructor(private readonly SptService: SptService) {}

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
  async addFood(@Body() body:SptDto): Promise<SptResponse<Spt>> {
    return {
      code: 1,
      data: null,
      message: 'Success.',
    };
  }
}
