import { TwitterBaseEntity } from 'src/commons/Base.entity';
import { UserEntity } from 'src/users/users.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from 'typeorm';

@Entity('posts')
export class PostEntity extends TwitterBaseEntity {
  @Column({ length: 240, nullable: true })
  text: string;
  @Column('json', { default: [] })
  images: Array<string>;

  @ManyToOne(() => UserEntity)
  @JoinColumn({ name: 'author_id' })
  author: UserEntity;

  @Column({ name: 'like_count', default: 0 })
  likesCount: number;
  @Column({ name: 'repost_count', default: 0 })
  repostCount: number;
  @Column('json', { default: [] })
  hashtags: Array<string>;
  @Column('json', { default: [] })
  mentions: Array<string>;

  @OneToOne(() => PostEntity)
  @JoinColumn({ name: 'orig_post_id' })
  origPost: PostEntity;

  @OneToOne(() => PostEntity)
  @JoinColumn({ name: 'reply_to_id' })
  replyTo: PostEntity;
}

class Mention {
  name: string;
  id: string;
}
