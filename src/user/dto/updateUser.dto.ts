/* eslint-disable @typescript-eslint/no-unsafe-call */
import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class UpdateUserDto {
  @IsString()
  @ApiProperty({ example: 'John' })
  readonly username: string;
  @IsString()
  @ApiProperty({ example: 'john@mail.com' })
  readonly email: string;
  @IsString()
  @ApiProperty({ example: 'qwerty' })
  readonly password: string;
}
