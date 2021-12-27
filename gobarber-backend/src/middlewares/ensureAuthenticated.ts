// vendors
import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

// config
import authConfig from '../config/auth';

// errors
import AppError from '../errors/AppErros';

// types
import { TokenPayload } from './types';

export default function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
): void {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError('Token is missing.', 401);
  }

  const [, token] = authHeader.split(' ');

  const { secret } = authConfig.jwt;

  try {
    const decoded = verify(token, secret);

    const { sub } = decoded as TokenPayload;

    request.user = {
      id: sub,
    };

    return next();
  } catch {
    throw new AppError('Invalid JWT', 401);
  }
}
