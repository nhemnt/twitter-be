import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsController } from './posts/posts.controller';
import { HashtagsController } from './hashtags/hashtags.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './users/users.entity';
import { PostEntity } from './posts/posts.entity';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      username: 'twitteradmin',
      password: 'twitterpassword',
      database: 'twitterdb',
      synchronize: true,
      logger: 'advanced-console',
      logging: 'all',
      entities: [UserEntity, PostEntity],
      dropSchema: true,
    }),
    UsersModule,
  ],
  controllers: [
    AppController,
    // UsersController,
    PostsController,
    HashtagsController,
  ],
  providers: [AppService],
})
export class AppModule {}
