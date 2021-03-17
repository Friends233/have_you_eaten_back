/*
 * @Description:
 * @Author: Friends233
 */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  _id: string;

  @Prop()
  user_name: string;

  @Prop()
  user_pass: string;

  @Prop()
  level: number;

  @Prop()
  address: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
