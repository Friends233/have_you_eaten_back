import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule, ShopModule, HomeModule } from './module'
@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/HXD_DB'), UserModule, ShopModule, HomeModule],
})
export class AppModule { }
