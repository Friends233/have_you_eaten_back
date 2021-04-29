/*
 * @Description:
 * @Author: Friends233
 */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SortController } from './sort.controller';
import { SortService } from './sort.service';
import { Sort, SortSchema } from './schemas/sort.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Sort', schema: SortSchema, collection: 'sort' },
    ]),
  ],
  controllers: [SortController],
  providers: [SortService],
})
export class SortModule {}
