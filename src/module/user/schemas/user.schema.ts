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
  _id?: string;

  @Prop()
  id?: string;

  @Prop()
  user_avatar?:string;
  
  @Prop()
  user_name?: string;

  @Prop()
  user_pass?: string;

  @Prop()
  user_level?: number;

  @Prop()
  user_address?: string;

  @Prop()
  user_phone?: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
