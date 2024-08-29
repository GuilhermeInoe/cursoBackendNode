import { Body, Controller, Post } from "@nestjs/common";
import { todoService } from "./todo.service";
import { TodoEntity } from "./entities/to-do.entity";

@Controller('todo')
export class TodoController {
    constructor(private readonly todoService: todoService) {}

    @Post('create')
    async create(@Body() body: any): Promise<TodoEntity> {
        return await this.todoService.createNewTodoItem(body.text, body.dificult)
    }
}