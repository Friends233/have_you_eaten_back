/*
 * @Description:
 * @Author: Friends233
 */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ShopDocument = Shop & Document;

interface Goods {
  id?: string;
  name?: string;
  desc?: string;
  sold?: string;
  price?: number;
  url?: string;
}

interface Foods {
  popular?: Goods[];
  discount?: Goods[];
  individual?: Goods[];
  team?: Goods[];
  snackDrink?: Goods[];
  fullReduction?: Goods[];
}

@Schema()
export class Shop {
  @Prop()
  id: string;

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
