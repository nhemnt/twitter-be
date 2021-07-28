import {
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Delete,
  NotFoundException,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UsersService } from './users.service';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}
  @Get('/@:username')
  async getUserByUsername(@Param('username') username: string): Promise<any> {
    const user = await this.userService.getUserByUsername(username);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
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
