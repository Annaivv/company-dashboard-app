import { sign } from 'jsonwebtoken';
import { JwtPayload } from '@/user/types/jwt-payload.interface';

export const safeSign = (payload: JwtPayload, secret: string): string => {
  return sign(payload, secret);
};
