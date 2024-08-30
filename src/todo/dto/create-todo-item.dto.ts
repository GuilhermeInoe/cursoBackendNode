import { IsInt, isInt } from "class-validator";
import { Length } from "class-validator";

export class CreateTodoItem{
  @Length(1, 10)
  text: string

  @IsInt()
  dificuldade: number
}