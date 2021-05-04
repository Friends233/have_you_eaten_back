/*
 * @Description:
 * @Author: Friends233
 */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OrderFormController } from './orderForm.controller';
import { OrderFormService } from './orderForm.service';
import { OrderForm, OrderFormSchema } from './schemas/orderForm.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'OrderForm', schema: OrderFormSchema, collection: 'orderForm' },
    ]),
  ],
  controllers: [OrderFormController],
  providers: [OrderFormService],
  exports:[OrderFormService]
})
export class OrderFormModule {}
