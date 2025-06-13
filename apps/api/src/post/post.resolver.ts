import { Resolver, Query, Context } from '@nestjs/graphql';
import { PostService } from './post.service';
import { Post } from './entities/post.entity';
import { UseGuards } from '@nestjs/common';
import { AuthJwtGuard } from 'src/auth/guards/auth-jwt/auth-jwt.guard';
// import { CreatePostInput } from './dto/create-post.input';
// import { UpdatePostInput } from './dto/update-post.input';

@Resolver(() => Post)
export class PostResolver {
  constructor(private readonly postService: PostService) {}

  @UseGuards(AuthJwtGuard)
  @Query(() => [Post], { name: 'posts' })
  findAll(@Context() context) {
    const user = context.req.user;
    console.log('User from context:', user);
    return this.postService.findAll();
  }
}
