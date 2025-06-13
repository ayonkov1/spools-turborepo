import { Injectable, UnauthorizedException } from '@nestjs/common';
import { verify } from 'argon2';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}
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

    // Verify the password using argon2
    // If the password is not set, we throw an UnauthorizedException
    // If the password is set, we verify it against the provided password
    // If the password does not match, we throw an UnauthorizedException
    // If the password matches, we return the user object
    const passwordMatches = await verify(user.password, password);

    if (!passwordMatches) {
      throw new UnauthorizedException('Invalid credentials');
    }

    return user;
  }
}
