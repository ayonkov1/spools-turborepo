import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { verify } from 'argon2';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthJwtPayload } from './types/auth-jwtPayload';
import { User } from '@prisma/client';
import { use } from 'passport';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async validateLocalUser(email: string, password: string): Promise<any> {
    const user = await this.prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      throw new UnauthorizedException('User not found');
    }

    if (!user.password) {
      throw new UnauthorizedException('User password not set');
    }

    const passwordMatches = await verify(user.password, password);

    if (!passwordMatches) {
      throw new UnauthorizedException('Invalid credentials');
    }

    return user;
  }

  async generateToken(userId: number) {
    const payload: AuthJwtPayload = { sub: userId };
    const accessToken = await this.jwtService.signAsync(payload);
    return { accessToken };
  }

  async login(user: User) {
    const { accessToken } = await this.generateToken(user.id);
    return {
      id: user.id,
      name: user.name,
      avatar: user.avatar,
      accessToken,
    };
  }

  async validateJwtUser(userId: number) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      throw new UnauthorizedException('User not found');
    }

    const currentUser = {
      id: user.id,
    };

    return currentUser;
  }
}
