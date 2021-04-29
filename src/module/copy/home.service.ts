/*
 * @Description:
 * @Author: Friends233
 */
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Home, HomeDocument } from './schemas/home.schema';
import { HomeDto } from './dto/home.dto';
import { newObjecId } from '../../utils/index';

@Injectable()
export class HomeService {
  constructor(@InjectModel('Home') private HomeModel: Model<HomeDocument>) { }

  // 查找所有
  async findAll(): Promise<Home[]> {
    const Homes = await this.HomeModel.find();
    return Homes;
  }

  // 查找
  async findOne(_id: string): Promise<Home> {
    return await this.HomeModel.findOne({ id: _id });
  }
}
