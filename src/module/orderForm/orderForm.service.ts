/*
 * @Description:
 * @Author: Friends233
 */
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { OrderForm, OrderFormDocument } from './schemas/orderForm.schema';
import { OrderFormDto } from './dto/orderForm.dto';
import { newObjecId } from '../../utils/index';

@Injectable()
export class OrderFormService {
  constructor(@InjectModel('OrderForm') private OrderFormModel: Model<OrderFormDocument>) { }

  // 查找所有
  async findAll(): Promise<OrderForm[]> {
    const OrderForms = await this.OrderFormModel.find();
    return OrderForms;
  }

  // 查找
  async findOne(_id: string): Promise<OrderForm> {
    return await this.OrderFormModel.findOne({ userId: _id });
  }

  async addOrderForm(userId: string, content: any): Promise<any> {
    const data: any = await this.OrderFormModel.findOne({ userId: userId })
    const date = new Date()
    content = content.map(item => {
      return {
        label: item.name,
        num: item.number,
        date: `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}`,
        url: item.img,
        type: 0,
        ...item
      }
    })
    const copy = (data.firest).concat(content)
    return await this.OrderFormModel.updateOne({ userId: userId }, { $set: { firest: copy } });
  }
}
