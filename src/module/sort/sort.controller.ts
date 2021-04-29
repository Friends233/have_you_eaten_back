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
import { SortService } from './sort.service';
import { SortDto } from './dto/sort.dto';
import { Sort } from './schemas/sort.schema';

interface SortResponse<T = unknown> {
  code: number;
  data?: T;
  message: string;
}

@Controller('sort')
export class SortController {
  constructor(private readonly SortService: SortService) {}

  // 查所有
  @Get('all')
  async findAll(): Promise<SortResponse<Sort[]>> {
    return {
      code: 1,
      data: await this.SortService.findAll(),
      message: 'Success.',
    };
  }

  // 根据id查
  @Get(':id')
  async findOne(@Param() param): Promise<SortResponse<Sort>> {
    return {
      code: 1,
      data: await this.SortService.findOne(param.id),
      message: 'Success.',
    };
  }
}
