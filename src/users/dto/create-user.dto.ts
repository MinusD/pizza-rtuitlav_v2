import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, Length } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'Dmitry', description: 'Имя' })
  readonly name: string;

  @ApiProperty({ example: 'a@a.a', description: 'Электронная почта' })
  @IsString({message: "Должно быть строкой"})
  @IsEmail({}, {message: "Некорректный email"})
  readonly email: string;

  @ApiProperty({ example: '******', description: 'Пароль' })
  @IsString({message: "Должно быть строкой"})
  @Length(4,16, {message: "Пароль от 4 до 16 символов"})
  readonly password: string;
}
