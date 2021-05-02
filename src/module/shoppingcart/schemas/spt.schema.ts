/*
 * @Description:
 * @Author: Friends233
 */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SptDocument = Spt & Document;

@Schema()
export class Spt {
  @Prop()
  id: string;
  
  @Prop()
  content: string;

  @Prop()
  user_id: string;
}

export const SptSchema = SchemaFactory.createForClass(Spt);
