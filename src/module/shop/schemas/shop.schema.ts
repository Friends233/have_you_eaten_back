/*
 * @Description:
 * @Author: Friends233
 */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ShopDocument = Shop & Document;

@Schema()
export class Shop {
  @Prop()
  _id: string;

  @Prop()
  name: string;

  @Prop()
  price: number;

  @Prop()
  rating: number;
  
  @Prop()
  address: string;

  @Prop()
  business: string;

  @Prop()
  phoneNumber: string;

  @Prop()
  desc: string[];

  @Prop()
  coverImg: string[];
}

export const ShopSchema = SchemaFactory.createForClass(Shop);
