import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Question } from './question.entity';

@Entity()
export class Quiz {
  @PrimaryGeneratedColumn({ comment: 'Primary key of the quiz' })
  id: number;

  @Column({ type: 'varchar', comment: 'Title of the quiz' })
  title: string;

  @Column({ type: 'text', comment: 'Description of the quiz' })
  description: string;

  @Column({ type: 'boolean', default: false, comment: 'Is quiz active' })
  isActive: boolean;

  @OneToMany(() => Question, (question) => question.quiz)
  questions: Question[];
}
