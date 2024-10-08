import { BaseEntity, Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class TodoEntity extends BaseEntity{
  @PrimaryGeneratedColumn("uuid")
  id:string

  @Column()
  text: string

  @Column({
    default: false
  })
  finalizado: boolean

  @Column()
  dificuldade: number

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date

  @DeleteDateColumn()
  deletedAt: Date | null

}