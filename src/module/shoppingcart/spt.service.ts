/*
 * @Description:
 * @Author: Friends233
 */
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Spt, SptDocument } from './schemas/spt.schema';
import { SptDto } from './dto/spt.dto';
import { newObjecId } from '../../utils/index';

@Injectable()
export class SptService {
  constructor(@InjectModel('Spt') private SptModel: Model<SptDocument>) { }

  // 查找所有
  async findAll(): Promise<Spt[]> {
    const Spts = await this.SptModel.find();
    return Spts;
  }

  // 查找
  async findOne(_id: string): Promise<Spt> {
    return await this.SptModel.findOne({ user_id: _id });
  }
}
