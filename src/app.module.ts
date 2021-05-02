import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule, ShopModule, HomeModule, SortModule, SptModule } from './module'

const ModuleList = [
  UserModule,
  ShopModule,
  HomeModule,
  SortModule,
  SptModule
]
@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/HXD_DB'), ...ModuleList],
})
export class AppModule { }
