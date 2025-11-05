/* eslint-disable @typescript-eslint/no-unsafe-call */
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class LoginUserDto {
  // @ApiProperty({ example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...' })
  // accessToken: string;

  @ApiProperty({
    example: 'test@mail.com',
    description: 'The email address of the logged-in user.',
  })
  @IsEmail()
  readonly email: string;

  @ApiProperty({
    example: 'pass123',
    description: 'The password of the logged-in user.',
  })
  @IsString()
  @IsNotEmpty()
  readonly password: string;
}
