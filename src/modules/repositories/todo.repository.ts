import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { TodoEntity } from "../entities/to-do.entity";

@Injectable()
export class todoRepository extends Repository<TodoEntity> {}