import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ListModule } from './lists/list.module';
import { ListEntity } from './lists/list.entity';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host:
          configService.get('ENV') === 'development'
            ? configService.get('DEV_DB_HOST')
            : configService.get('PROD_DB_HOST'),
        port: +configService.get('PORT'),
        username:
          configService.get('ENV') === 'development'
            ? configService.get('DEV_DB_USERNAME')
            : configService.get('DEV_DB_USERNAME'),
        password:
          configService.get('ENV') === 'development'
            ? configService.get('PROD_DB_PASSWORD')
            : configService.get('DEV_DB_PASSWORD'),
        database:
          configService.get('ENV') === 'development'
            ? configService.get('PROD_DATABASE')
            : configService.get('DEV_DATABASE'),
        schema:
          configService.get('ENV') === 'development'
            ? configService.get('PROD_SCHEMA')
            : configService.get('DEV_SCHEMA'),
        entities: [ListEntity],
        autoLoadEntities: true,
        synchronize: configService.get('ENV') === 'development' ? true : false,
      }),
      inject: [ConfigService],
    }),
    ListModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
