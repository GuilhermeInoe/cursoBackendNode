import { Module } from '@nestjs/common';
import { todoService } from './todo.service';
import { todoRepository } from 'src/modules/repositories/todo.repository';
import { TodoController } from './todo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoEntity } from 'src/todo/entities/to-do.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TodoEntity])],
  controllers: [TodoController],
  providers: [todoService, todoRepository],
})
export class toDoModule {}
