/*
 * @Description:
 * @Author: Friends233
 */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { HomeController } from './home.controller';
import { HomeService } from './home.service';
import { Home, HomeSchema } from './schemas/home.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Home', schema: HomeSchema, collection: 'home' },
    ]),
  ],
  controllers: [HomeController],
  providers: [HomeService],
})
export class HomeModule {}
