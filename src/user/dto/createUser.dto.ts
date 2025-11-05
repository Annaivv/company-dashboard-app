/* eslint-disable @typescript-eslint/no-unsafe-call */
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @ApiProperty({ example: 'John' })
  readonly username: string;
  @IsEmail()
  @ApiProperty({ example: 'test@mail.com' })
  readonly email: string;
  @IsNotEmpty()
  @ApiProperty({ example: 'pass123' })
  readonly password: string;
}
