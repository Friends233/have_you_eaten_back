import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/HXD_DB'), UserModule],
})
export class AppModule {}
