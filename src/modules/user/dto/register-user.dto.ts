import {
  IsEmail,
  IsNotEmpty,
  IsString,
  Length,
  Matches,
} from 'class-validator';
import { MESSAGE, REGEX } from 'src/utils';

export class RegisterUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @Length(8, 20)
  @Matches(REGEX.PASSWORD, {
    message: MESSAGE.INVALID_PASSWORD,
  })
  password: string;

  @IsNotEmpty()
  @Length(8, 20)
  @Matches(REGEX.PASSWORD, {
    message: MESSAGE.INVALID_PASSWORD,
  })
  confirm: string;
}
