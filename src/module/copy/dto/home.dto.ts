/*
 * @Description:
 * @Author: Friends233
 */
export class HomeDto {
  readonly id?: string;
  recommend?: Shop[];
  find?: Shop[];
  supermarket?: Shop[];
  fruit?: Shop[];
  vegettables?: Shop[];
  medicine?: Shop[];
}

interface Shop {
  id: string;
  // 名称
  name: string;
  // 图片地址
  imgUrl: string;
  // 评价星级
  rating: number;
  // 评价
  appraisalNumber: number;
  // 位置
  location: string;
  // 价格
  price: number;
}