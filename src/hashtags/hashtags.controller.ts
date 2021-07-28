import { Controller, Get, Param } from '@nestjs/common';

@Controller('hashtags')
export class HashtagsController {
  @Get('/')
  getTopHashtags(): string {
    //Todo: add actual logic
    return 'all top hashtags';
  }

  @Get('/:tag/posts')
  getPostsForHashtag(@Param() param): string {
    //Todo: add actual logic
    return `show all post with hashtag ${param.tag}`;
  }
}
