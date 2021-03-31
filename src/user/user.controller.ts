/*
 * @Description:
 * @Author: Friends233
 */
import {
  Body,
  Controller,
  Get,
  Post,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './dto/user.dto';
import { User } from './schemas/user.schema';

interface UserResponse<T = unknown> {
  code: number;
  data?: T;
  message: string;
}

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('all')
  async findAll(): Promise<UserResponse<User[]>> {
    return {
      code: 1,
      data: await this.userService.findAll(),
      message: 'Success.',
    };
  }

  @Post('login')
  async userLogin(@Body() body: UserDto): Promise<UserResponse> {
    const res: User = await this.userService.login(body);
    if (res) {
      return {
        code: 1,
        data: {
          userInfo: res,
          access_token: 'token',
        },
        message: '登陆成功!',
      };
    } else {
      return {
        code: 0,
        message: '账号或密码错误',
      };
    }
  }

  @Post('register')
  async userReg(@Body() body: UserDto): Promise<UserResponse> {
    const res: boolean = await this.userService.addOne(body);
    if (res) {
      return {
        code: 1,
        message: '注册成功',
      };
    } else {
      return {
        code: 0,
        message: '账号已存在',
      };
    }
  }
  @Get(':_id')
  async findOne(@Param('_id') _id: string): Promise<UserResponse<User>> {
    return {
      code: 1,
      data: await this.userService.findOne(_id),
      message: 'Success.',
    };
  }

  @Post()
  async addOne(@Body() body: any): Promise<UserResponse> {
    await this.userService.addOne(body);
    return {
      code: 1,
      message: 'Success.',
    };
  }

  @Put(':_id')
  async editOne(
    @Param('_id') _id: string,
    @Body() body: any,
  ): Promise<UserResponse> {
    await this.userService.editOne(_id, body);
    return {
      code: 1,
      message: 'Success.',
    };
  }

  @Delete(':_id')
  async deleteOne(@Param('_id') _id: string): Promise<UserResponse> {
    await this.userService.deleteOne(_id);
    return {
      code: 1,
      message: 'Success.',
    };
  }
}
