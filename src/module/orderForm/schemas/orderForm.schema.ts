/*
 * @Description:
 * @Author: Friends233
 */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type OrderFormDocument = OrderForm & Document;

interface Order {
  label: string;
  desc: string;
  num: number;
  date: string;
  price: number;
  url: string;
  type: number;
}

@Schema()
export class OrderForm {
  @Prop()
  id: string;

  @Prop()
  userId: string;

  @Prop()
  firest?: Order[];

  @Prop()
  second?: Order[];

  @Prop()
  third?: Order[];

  @Prop()
  fruit?: Order[];

  @Prop()
  fourth?: Order[];

}

export const OrderFormSchema = SchemaFactory.createForClass(OrderForm);
