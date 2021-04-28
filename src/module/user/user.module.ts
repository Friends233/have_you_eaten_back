/*
 * @Description:
 * @Author: Friends233
 */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { User, UserSchema } from './schemas/user.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'user', schema: UserSchema, collection: 'users' },
    ]),
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
