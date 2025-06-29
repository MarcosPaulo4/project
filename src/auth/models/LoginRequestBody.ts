import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class LoginRequestBody {
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
