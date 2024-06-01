import { IsNotEmpty, IsString } from 'class-validator';

export class CreateLoginDto {
  @IsNotEmpty()
  @IsString()
  nameOrEmail: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}
