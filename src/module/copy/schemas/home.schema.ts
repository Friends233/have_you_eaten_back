/*
 * @Description:
 * @Author: Friends233
 */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type HomeDocument = Home & Document;

interface Shop {
  id: string;
  // 名称
  name: string;
  // 图片地址
  imgUrl: string;
  // 评价星级
  rating: number;
  // 评价
  appraisalNumber: number;
  // 位置
  location: string;
  // 价格
  price: number;
}

@Schema()
export class Home {
  @Prop()
  id: string;

  @Prop()
  recommend?: Shop[];

  @Prop()
  find?: Shop[];

  @Prop()
  supermarket?: Shop[];

  @Prop()
  fruit?: Shop[];

  @Prop()
  vegettables?: Shop[];

  @Prop()
  medicine?: Shop[];


}

export const HomeSchema = SchemaFactory.createForClass(Home);
