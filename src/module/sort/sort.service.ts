/*
 * @Description:
 * @Author: Friends233
 */
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Sort, SortDocument } from './schemas/sort.schema';
import { SortDto } from './dto/sort.dto';
import { newObjecId } from '../../utils/index';

@Injectable()
export class SortService {
  constructor(@InjectModel('Sort') private SortModel: Model<SortDocument>) { }

  // 查找所有
  async findAll(): Promise<Sort[]> {
    const Sorts = await this.SortModel.find();
    return Sorts;
  }

  // 查找
  async findOne(_id: string): Promise<Sort> {
    return await this.SortModel.findOne({ id: _id });
  }
}
