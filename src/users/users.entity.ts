import { TwitterBaseEntity } from 'src/commons/Base.entity';
import { Column, Entity } from 'typeorm';

@Entity('users')
export class UserEntity extends TwitterBaseEntity {
  @Column({ length: 30, nullable: false, unique: true })
  username: string;

  @Column({ length: 50 })
  name: string;
  avatar: string;
  @Column({ length: 240 })
  bio: string;

  @Column({ name: 'follower_count', default: 0 })
  followerCount: number;

  @Column({ name: 'followee_count', default: 0 })
  followeeCount: number;

  @Column({ default: false })
  verified: boolean;
}
