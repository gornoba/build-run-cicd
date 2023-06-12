import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ListEntity } from './list.entity';

@Injectable()
export class ListService {
  constructor(
    @InjectRepository(ListEntity)
    private listRepository: Repository<ListEntity>,
  ) {}

  async findAll() {
    return await this.listRepository.find();
  }

  async insert(comment: string) {
    const listEntity = new ListEntity();
    listEntity.comment = comment;
    await this.listRepository.save(listEntity);

    return {
      success: true,
      value: listEntity,
    };
  }
}
