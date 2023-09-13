import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('devs_dev')
export class Devs {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ default: true })
  isActive: boolean;
}
