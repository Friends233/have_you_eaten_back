/*
 * @Description:
 * @Author: Friends233
 */
export class CreateUserDto {
  readonly _id: string;
  readonly user_name: string;
  readonly user_pass: string;
  readonly user_level?: number;
  readonly user_address?: string;
}
