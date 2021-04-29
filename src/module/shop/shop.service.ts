/*
 * @Description:
 * @Author: Friends233
 */
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Shop, ShopDocument } from './schemas/shop.schema';
import { ShopDto } from './dto/shop.dto';
import { newObjecId } from '../../utils/index';

@Injectable()
export class ShopService {
  constructor(@InjectModel('Shop') private ShopModel: Model<ShopDocument>) { }

  // 查找所有
  async findAll(): Promise<Shop[]> {
    const Shops = await this.ShopModel.find();
    return Shops;
  }

  async findOneName(name: string): Promise<Shop> {
    return await this.ShopModel.findOne({ Shop_name: name });
  }

  // 查找
  async findOne(_id: string): Promise<Shop> {
    return await this.ShopModel.findOne({ id: _id });
  }

  // 编辑
  async editOne(_id: string, body: Shop): Promise<void> {
    await this.ShopModel.findByIdAndUpdate(_id, body);
  }

  // 删除
  async deleteOne(_id: string): Promise<void> {
    await this.ShopModel.findByIdAndDelete(_id);
  }
}
