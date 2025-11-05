import { CreateUserDto } from '@/user/dto/createUser.dto';
import { UserService } from '@/user/user.service';
import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UsePipes(new ValidationPipe())
  @Post()
  @ApiOperation({ summary: 'Create a user' })
  @ApiResponse({ status: 201, description: 'Returns a new user' })
  async createUser(@Body('user') createUserDto: CreateUserDto): Promise<any> {
    // eslint-disable-next-line @typescript-eslint/await-thenable
    return await this.userService.createUser(createUserDto);
  }
}
