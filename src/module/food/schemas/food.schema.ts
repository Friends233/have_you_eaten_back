/*
 * @Description:
 * @Author: Friends233
 */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type FoodDocument = Food & Document;

@Schema()
export class Food {
  @Prop()
  id: string;

  @Prop()
  desc: string;

  @Prop()
  discount: string;

  @Prop()
  favorableRate: string;

  @Prop()
  material: string;

  @Prop()
  monthlySale: string;

  @Prop()
  name: string;

  @Prop()
  packagingCosts: string;

  @Prop()
  price: string;

  @Prop()
  priceDescription: string;

  @Prop()
  taste: string;

  @Prop()
  url: string;

  @Prop()
  label:string;
}

export const FoodSchema = SchemaFactory.createForClass(Food);
