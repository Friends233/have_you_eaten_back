/*
 * @Description:
 * @Author: Friends233
 */
export class UserDto {
  readonly _id?: string;
  readonly userName: string;
  readonly userPass: string;
  readonly userLevel?: number;
  readonly userAddress?: string;
  readonly userPhone?:string;
  readonly userAvatar?:string;
}
