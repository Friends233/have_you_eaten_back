/*
 * @Description:
 * @Author: Friends233
 */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SptController } from './spt.controller';
import { SptService } from './spt.service';
import { Spt, SptSchema } from './schemas/spt.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Spt', schema: SptSchema, collection: 'shoppingcart' },
    ]),
  ],
  controllers: [SptController],
  providers: [SptService],
})
export class SptModule {}
