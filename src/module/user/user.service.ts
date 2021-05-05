/*
 * @Description:
 * @Author: Friends233
 */
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schemas/user.schema';
import { UserDto } from './dto/user.dto';
import { newObjecId } from '../../utils/index';

@Injectable()
export class UserService {
  constructor(@InjectModel('user') private userModel: Model<UserDocument>) { }

  // 查找所有用户
  async findAll(): Promise<User[]> {
    const users = await this.userModel.find();
    return users;
  }

  async getNum(): Promise<number> {
    return await this.userModel.find().countDocuments()
  }

  async findOneName(name: string): Promise<User> {
    return await this.userModel.findOne({ user_name: name });
  }

  // 查找单个用户
  async findOne(_id: string): Promise<User> {
    return await this.userModel.findById(_id);
  }

  // 添加单个用户
  async addOne(body: UserDto): Promise<any> {
    const res = await this.userModel.findOne({ user_name: body.userName });
    const num = await this.getNum()
    if (res === null) {
      await this.userModel.create({
        _id: newObjecId(),
        id: `user_${num + 1}`,
        user_level: 2,
        user_name: body.userName,
        user_pass: body.userPass,
        user_avatar: body.userAvatar,
        user_address:'',
        user_phone:'',
        favorites:''
      });
      return `user_${num + 1}`
    } else {
      return false;
    }
  }

  // 编辑单个用户
  async editOne(_id: string, body: UserDto): Promise<void> {
    const userInfo: User = {}
    for (let i of Object.keys(body)) {
      switch (i) {
        case 'userName': userInfo.user_name = body[i]; break;
        case 'userPass': userInfo.user_pass = body[i]; break;
        case 'userAddress': userInfo.user_address = body[i]; break;
        case 'userPhone': userInfo.user_phone = body[i]; break;
      }
    }
    await this.userModel.updateOne({ id: _id }, { $set: { ...userInfo } });
  }

  // 删除单个用户
  async deleteOne(_id: string): Promise<void> {
    await this.userModel.findByIdAndDelete(_id);
  }

  // 根据token返回用户数据
  async tokenToUser(token: string): Promise<User> {
    return await this.userModel.findOne({
      user_name: token,
    });
  }

  // 登录
  async login(body: UserDto): Promise<User> {
    const user = await this.userModel.findOne({
      user_name: body.userName,
    });
    if (user && user.user_pass === body.userPass) {
      return user;
    } else {
      return null;
    }
  }
}
