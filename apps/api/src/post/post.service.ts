import { Injectable } from '@nestjs/common';
import {
  DEFAULT_PAGINATION_SKIP,
  DEFAULT_PAGINATION_TAKE,
} from 'src/constants';

import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PostService {
  constructor(private prisma: PrismaService) {}

  async findAll({
    skip = DEFAULT_PAGINATION_SKIP,
    take = DEFAULT_PAGINATION_TAKE,
  }: { skip?: number; take?: number } = {}): Promise<any[]> {
    return await this.prisma.post.findMany({
      skip,
      take,
      include: {
        author: true,
        tags: true,
      },
    });
  }

  async count(): Promise<number> {
    return await this.prisma.post.count();
  }

  async findOne(id: number): Promise<any> {
    console.log(this.prisma.post);

    return await this.prisma.post.findFirst({
      where: { id },
      include: {
        author: true,
        tags: true,
      },
    });
  }
}
