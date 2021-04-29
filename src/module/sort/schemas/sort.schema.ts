/*
 * @Description:
 * @Author: Friends233
 */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SortDocument = Sort & Document;

@Schema()
export class Sort {
  @Prop()
  id: string;
  @Prop()
  label: string;
  @Prop()
  icon: string;
  @Prop()
  color: string;
}

export const SortSchema = SchemaFactory.createForClass(Sort);
