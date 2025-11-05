import { IUser } from '@/user/types/user.type';
import { UserEntity } from '@/user/user.entity';
import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Request } from 'express';

interface RequestWithUser extends Request {
  user: IUser & Omit<UserEntity, 'password'>;
}

export const User = createParamDecorator(
  (data: keyof RequestWithUser['user'] | undefined, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest<RequestWithUser>();
    const user = request.user;

    if (!user) return null;

    if (data) return user[data];

    return user;
  },
);
