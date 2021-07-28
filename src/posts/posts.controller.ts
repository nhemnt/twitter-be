import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('posts')
@Controller('posts')
export class PostsController {
  @Get('/')
  getAllPosts(): string {
    return `Get all posts`;
  }

  @Get('/:postId')
  getPostDetails(@Param('postId') postId: string): string {
    return `detail of post = ${postId}`;
  }

  @Post('/')
  createNewPost(): string {
    return `new post was created`;
  }

  @Delete('/:postId')
  deletePost(@Param('postId') postId: string): string {
    return `delete post id = ${postId}`;
  }

  @Put('/:postId/like')
  likePost(@Param('postId') postId: string): string {
    return `liked post ${postId}`;
  }

  @Delete('/:postId/like')
  unlikePost(@Param('postId') postId: string): string {
    return `unliked post ${postId}`;
  }
}
