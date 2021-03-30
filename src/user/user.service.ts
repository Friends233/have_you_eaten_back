/*
 * @Description:
 * @Author: Friends233
 */
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schemas/user.schema';
import { CreateUserDto } from './dto/create.user.dto';
import { newObjecId } from '../utils/index';

@Injectable()
export class UserService {
  constructor(@InjectModel('user') private userModel: Model<UserDocument>) {}

  // 查找所有用户
  async findAll(): Promise<User[]> {
    const users = await this.userModel.find();
    return users;
  }

  async findOneName(name: string): Promise<User> {
    return await this.userModel.findOne({ user_name: name });
  }

  // 查找单个用户
  async findOne(_id: string): Promise<User> {
    return await this.userModel.findById(_id);
  }

  // 添加单个用户
  async addOne(body): Promise<boolean> {
    const res = await this.userModel.findOne({ user_name: body.userName });
    if (res === null) {
      await this.userModel.create({
        _id: newObjecId(),
        user_level: 2,
        user_name: body.userName,
        user_pass: body.userPass,
      });
      return true;
    } else {
      return false;
    }
  }

  // 编辑单个用户
  async editOne(_id: string, body: User): Promise<void> {
    await this.userModel.findByIdAndUpdate(_id, body);
  }

  // 删除单个用户
  async deleteOne(_id: string): Promise<void> {
    await this.userModel.findByIdAndDelete(_id);
  }

  // 登录
  async login(body: User): Promise<User> {
    return await this.userModel.findOne(body);
  }
}
