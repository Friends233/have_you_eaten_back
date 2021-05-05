/*
 * @Description:
 * @Author: Friends233
 */
import { Module } from '@nestjs/common';
import { FoodModule } from '../food/food.module'
import { OrderFormModule } from '../orderForm/orderForm.module'
import { MongooseModule } from '@nestjs/mongoose';
import { SptController } from './spt.controller';
import { SptService } from './spt.service';
import { Spt, SptSchema } from './schemas/spt.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Spt', schema: SptSchema, collection: 'shoppingcart' },
    ]),
    FoodModule,
    OrderFormModule
  ],
  controllers: [SptController],
  providers: [SptService],
  exports: [SptService]
})
export class SptModule { }
