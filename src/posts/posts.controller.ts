import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('posts')
export class PostsController {
  @Get('/')
  getAllPosts(): string {
    return `Get all posts`;
  }

  @Get('/:postId')
  getPostDetails(@Param() param): string {
    return `detail of post = ${param.postId}`
  }

  @Post('/')
  createNewPost(): string {
    return `new post was created`;
  }

  @Delete('/:postId')
  deletePost(@Param() param): string {
    return `delete post id = ${param.postId}`;
  }

  @Put('/:postId/like')
  likePost(@Param() param): string {
    return `liked post ${param.postId}`;
  }

  @Delete('/:postId/like')
  unlikePost(@Param() param): string {
    return `unliked post ${param.postid}`;
  }
}
