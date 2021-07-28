import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { hash, compare } from 'bcrypt';
import { Repository } from 'typeorm';
import { PasswordEntity } from './passwords.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(PasswordEntity)
    private passwordRepo: Repository<PasswordEntity>,
  ) {}

  public static PASSWORD_SALT_ROUNDS = 10;

  async createPasswordForNewUSer(
    userId: string,
    password: string,
  ): Promise<PasswordEntity> {
    const existing = await this.passwordRepo.findOne({ where: { userId } });
    if (existing) {
      throw new UnauthorizedException(
        'This user already has a password, cantnot set new password',
      );
    }

    const newPassword = new PasswordEntity();
    newPassword.userId = userId;
    newPassword.password = await this.passToHash(password);
    return await this.passwordRepo.save(newPassword);
  }

  private passToHash(password: string): Promise<string> {
    return hash(password, AuthService.PASSWORD_SALT_ROUNDS);
  }

  private async matchPassHash(
    password: string,
    hash: string,
  ): Promise<boolean> {
    return (await compare(password, hash)) === true;
  }
}
