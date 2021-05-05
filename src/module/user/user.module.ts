/*
 * @Description:
 * @Author: Friends233
 */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { User, UserSchema } from './schemas/user.schema';
import { OrderFormModule } from '../orderForm/orderForm.module'
import { SptModule } from '../shoppingcart/spt.module'

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'user', schema: UserSchema, collection: 'users' },
    ]),
    OrderFormModule,
    SptModule
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule { }
