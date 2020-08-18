import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Employee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fullname: string;

  @Column()
  position: string;

  @Column()
  salary: string;

  @Column()
  status: string;

  @Column()
  dataOfEntry: string;
}