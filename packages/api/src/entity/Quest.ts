import { 
  Entity, 
  PrimaryGeneratedColumn, 
  Column, 
  BaseEntity, 
  CreateDateColumn, 
  UpdateDateColumn, 
  OneToOne,
  JoinColumn
} from "typeorm";

import { User }  from './User'

@Entity('quests')
export class Quest extends BaseEntity{

  @PrimaryGeneratedColumn()
  id: number;

  @Column("text")
  title : string;

  @OneToOne(type => User)
  @JoinColumn()
  creator : User;

  @Column("text")
  description: string;

  @Column("text")
  thumbnail: string;

  @CreateDateColumn({type: "timestamp"})
  createdAt: Date;

  @UpdateDateColumn({type: "timestamp"})
  updatedAt: Date;
}
