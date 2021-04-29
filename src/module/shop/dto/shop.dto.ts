/*
 * @Description:
 * @Author: Friends233
 */
export class ShopDto {
  readonly _id?: string;
  name?: string;
  rating?: number;
  price?: number;
  address?: string;
  phoneNumber?: string;
  business?: string;
  desc?: string[];
  coverImg?: string[];
  food?: Foods;
}

interface Foods {
  popular?: string[];
  discount?: string[];
  individual?: string[];
  team?: string[];
  snackDrink?: string[];
  fullReduction?: string[];
}
