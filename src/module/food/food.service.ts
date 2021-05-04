/*
 * @Description:
 * @Author: Friends233
 */
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Food, FoodDocument } from './schemas/food.schema';
import { FoodDto } from './dto/food.dto';
import { newObjecId } from '../../utils/index';

@Injectable()
export class FoodService {
  constructor(@InjectModel('Food') private FoodModel: Model<FoodDocument>) { }

  // 查找所有
  async findAll(): Promise<Food[]> {
    const Foods = await this.FoodModel.find();
    return Foods;
  }

  // 查找
  async findOne(_id: string): Promise<Food> {
    return await this.FoodModel.findOne({ id: _id });
  }

  // 根据名称搜索
  async findByName(name: string): Promise<any> {
    const reg = new RegExp(name, 'i')
    return await this.FoodModel.find({ $or: [{ name: { $regex: reg } }] });
  }

  async addLabel(body: any): Promise<any> {
    await this.FoodModel.updateOne({ id: body.id }, { $set: { label: body.label } });
  }
}
