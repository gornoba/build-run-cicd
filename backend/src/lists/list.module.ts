import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ListService } from './list.service';
import { ListEntity } from './list.entity';
import { ListController } from './list.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ListEntity])],
  providers: [ListService],
  controllers: [ListController],
})
export class ListModule {}
