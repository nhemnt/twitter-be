import { TwitterBaseEntity } from 'src/commons/Base.entity';
import { UserEntity } from 'src/users/users.entity';
import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';

@Entity('passwords')
export class PasswordEntity extends TwitterBaseEntity {
  @Column()
  userId: string;

  @JoinColumn({ name: 'userId' })
  @OneToOne(() => UserEntity)
  user: UserEntity;

  @Column({ nullable: false })
  password: string;
}
