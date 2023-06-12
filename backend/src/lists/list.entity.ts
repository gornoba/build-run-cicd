import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('lists')
export class ListEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'text',
    nullable: false,
  })
  comment: string;
}
