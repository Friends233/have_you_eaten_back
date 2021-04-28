/*
 * @Description:
 * @Author: Friends233
 */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ShopController } from './shop.controller';
import { ShopService } from './shop.service';
import { Shop, ShopSchema } from './schemas/shop.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Shop', schema: ShopSchema, collection: 'shop' },
    ]),
  ],
  controllers: [ShopController],
  providers: [ShopService],
})
export class ShopModule {}
