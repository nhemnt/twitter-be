import { Injectable } from '@nestjs/common';
import { UserEntity } from './users.entity';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(private userRepo: UsersRepository) {}
  /**
   * @description find a user with given userName
   * @param username
   * @returns {Promise<UserEntity[]>}
   */
  public async getUserByUsername(username: string): Promise<UserEntity> {
    return await this.userRepo.findOne({ where: { username } });
  }

  /**
   * @description find a user with given userId
   * @param userId
   * @returns {Promise<UserEntity>}
   */
  public async getUserByUserId(userId: string): Promise<UserEntity> {
    return await this.userRepo.findOne({ where: { id: userId } });
  }

  /**
   * @description create new user with given details
   * @returns {Promise<UserEntity>} user if created
   */
  public async createUser(user: Partial<UserEntity>): Promise<UserEntity> {
    return this.userRepo.save(user);
  }

  /**
   * @description update a user with given details
   * @returns {Promise<UserEntity>} user if updated
   */
  public async updateUser(
    userId: string,
    newUserDetails: Partial<UserEntity>,
  ): Promise<UserEntity> {
    const exisitingUser = await this.userRepo.findOne({
      where: { id: userId },
    });
    if (!exisitingUser) {
      return null;
    }
    if (newUserDetails.avatar) exisitingUser.avatar = newUserDetails.avatar;
    if (newUserDetails.bio) exisitingUser.bio = newUserDetails.bio;
    if (newUserDetails.name) exisitingUser.name = newUserDetails.name;

    return await this.userRepo.save(exisitingUser);
  }
}
