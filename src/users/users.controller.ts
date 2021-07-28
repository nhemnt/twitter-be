import {
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Delete,
  NotFoundException,
  Body,
} from '@nestjs/common';
import { ApiProperty, ApiPropertyOptional, ApiTags } from '@nestjs/swagger';
import { UserEntity } from './users.entity';
import { UsersService } from './users.service';

export class UserCreateRequestBody {
  @ApiProperty() username: string;
  @ApiProperty() password: string;
  @ApiPropertyOptional() name: string;
  @ApiPropertyOptional() avatar: string;
  @ApiPropertyOptional() bio: string;
}

export class UserUpdateRequestBody {
  @ApiPropertyOptional() password: string;
  @ApiPropertyOptional() name: string;
  @ApiPropertyOptional() avatar: string;
  @ApiPropertyOptional() bio: string;
}
@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}
  @Get('/@:username')
  async getUserByUsername(
    @Param('username') username: string,
  ): Promise<UserEntity> {
    const user = await this.userService.getUserByUsername(username);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  @Get('/:userid')
  async getUserByUserid(@Param('userid') userid: string): Promise<UserEntity> {
    const user = await this.userService.getUserByUserId(userid);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  @Post('/')
  async createNewUser(
    @Body() createUserRequest: UserCreateRequestBody,
  ): Promise<UserEntity> {
    const user = await this.userService.createUser(createUserRequest);
    return user;
  }

  @Patch('/:userId')
  async updateUserDetails(
    @Param('userId') userId: string,
    @Body() updateUserRequest: UserUpdateRequestBody,
  ): Promise<UserEntity> {
    const user = this.userService.updateUser(userId, updateUserRequest);
    return user;
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
