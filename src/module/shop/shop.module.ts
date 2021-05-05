/*
 * @Description:
 * @Author: Friends233
 */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ShopController } from './shop.controller';
import { ShopService } from './shop.service';
import { Shop, ShopSchema } from './schemas/shop.schema';
import { FoodModule } from '../food/food.module'

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Shop', schema: ShopSchema, collection: 'shop' },
    ]),
    FoodModule
  ],
  controllers: [ShopController],
  providers: [ShopService],
})
export class ShopModule { }
