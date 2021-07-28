import {
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Delete,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
export class UsersController {
  @Get('/@:username')
  getUserByUsername(@Param('username') username: string): string {
    //Todo: add actual logic
    return `detail of username = ${username}`;
  }

  @Get('/:userid')
  getUserByUserid(@Param('userid') userid: string): string {
    //Todo: add actual logic
    return `detail of user id = ${userid}`;
  }

  @Post('/')
  createNewUser(): string {
    return 'new user created';
  }

  @Patch('/:userId')
  updateUserDetails(@Param('userId') userId: string): string {
    return `details of user ${userId} is updated`;
  }

  @Put('/:userId/follow')
  followUser(): string {
    return 'you followed user';
  }

  @Delete('/:userId/follow')
  unfollowUser(): string {
    return 'you unfollowed user';
  }

  @Get('/:userId/followers')
  getFollowersOfUser(): string {
    return `get followers if user`;
  }

  @Put('/:userId/followees')
  getFolloweesOfUser(): string {
    return `get followees of given user`;
  }
}
