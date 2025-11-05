import { CreateUserDto } from '@/user/dto/createUser.dto';
import { LoginUserDto } from '@/user/dto/loginUser.dto';
import { IUserResponse } from '@/user/types/userResponse.interface';
import { UserService } from '@/user/user.service';
import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  @ApiBody({ type: CreateUserDto })
  @ApiOperation({ summary: 'Create a user' })
  @ApiResponse({ status: 201, description: 'Returns a new user' })
  async createUser(
    @Body('user') createUserDto: CreateUserDto,
  ): Promise<IUserResponse> {
    return await this.userService.createUser(createUserDto);
  }

  @Post('login')
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
}
