import {
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Delete,
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get('/@:username')
  getUserByUsername(@Param() param): string {
    //Todo: add actual logic
    return `detail of username = ${param.username}`;
  }

  @Get('/:userid')
  getUserByUserid(@Param() param): string {
    //Todo: add actual logic
    return `detail of user id = ${param.userid}`;
  }

  @Post('/')
  createNewUser(): string {
    return 'new user created';
  }

  @Patch('/:userId')
  updateUserDetails(@Param() param): string {
    return `details of user ${param.userid} is updated`;
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
