// import type { AuthRequest } from '@/types/expressRequest.interface';
import { User } from '@/user/decorators/user.decorator';
import { CreateUserDto } from '@/user/dto/createUser.dto';
import { LoginUserDto } from '@/user/dto/loginUser.dto';
import type { IUserResponse } from '@/user/types/userResponse.interface';
import { UserEntity } from '@/user/user.entity';
import { UserService } from '@/user/user.service';
import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('users')
  @UsePipes(new ValidationPipe())
  @ApiBody({ type: CreateUserDto })
  @ApiOperation({ summary: 'Create a user' })
  @ApiResponse({ status: 201, description: 'Returns a new user' })
  async createUser(
    @Body('user') createUserDto: CreateUserDto,
  ): Promise<IUserResponse> {
    return await this.userService.createUser(createUserDto);
  }

  @Post('users/login')
  @UsePipes(new ValidationPipe())
  @ApiOperation({ summary: 'Logging in a user' })
  @ApiResponse({
    status: 200,
    description: 'Successful login. Returns access token and user information.',
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized: Invalid username or password.',
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden: User account is disabled.',
  })
  async loginUser(
    @Body('user') loginUserDto: LoginUserDto,
  ): Promise<IUserResponse> {
    const user = await this.userService.loginUser(loginUserDto);
    return this.userService.generateUserResponse(user);
  }

  @Get('user')
  @ApiOperation({ summary: 'Get the current user' })
  @ApiResponse({
    status: 200,
    description:
      'User data received successfully. Returns access token and user information.',
  })
  @ApiResponse({
    status: 400,
    description: 'User data is missing.',
  })
  getCurrentUser(@User() user: UserEntity): IUserResponse {
    return this.userService.generateUserResponse(user);
  }
}
