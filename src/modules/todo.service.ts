import { Injectable } from '@nestjs/common';
import { todoRepository } from './repositories/todo.repository'; 
import { TodoEntity } from './entities/to-do.entity';

@Injectable()
export class todoService{
  constructor(private readonly todoRepository: todoRepository ){}

  async createNewTodoItem(text: string, dificuldade: number): Promise<TodoEntity>{
    const data = {
      text
    }
    if (dificuldade <= 0) data["dificuldade"] = 0
    else if (dificuldade <= 25) data["dificuldade"] = 25
    else if (dificuldade <= 50) data["dificuldade"] <= 50
    else if (dificuldade <= 75) data["dificuldade"] <= 75
    else data["dificuldade"] = 100

    const entity = await this.todoRepository.registerItem(data);
    return entity
  }

  
}
