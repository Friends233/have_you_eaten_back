/*
 * @Description:
 * @Author: Friends233
 */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FoodController } from './food.controller';
import { FoodService } from './food.service';
import { Food, FoodSchema } from './schemas/food.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Food', schema: FoodSchema, collection: 'food' },
    ]),
  ],
  controllers: [FoodController],
  providers: [FoodService],
})
export class FoodModule {}
