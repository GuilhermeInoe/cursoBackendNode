import { Injectable } from '@nestjs/common';
import { Between, ILike, NumericType, Repository } from 'typeorm';
import { TodoEntity } from '../entities/to-do.entity';

@Injectable()
export class todoRepository extends Repository<TodoEntity> {
  async getOneById(id: string): Promise<TodoEntity> {
    const entity = this.findOneBy({
      id,
    });
    if (!entity) throw new Error(`Item ${id} não foi encontrado!`);
    return entity;
  }

  async list(params: {
    page: number;
    perPage: number;
    createdAt?: Date;
    dificuldade?: number;
    search?: String;
    finalizado?: Boolean;
    //parâmetros com "?" não são obrigatórios
  }): Promise<Array<TodoEntity>> {
    const where = {};
    if (params.createdAt) {
      //Manipulação de datas para pegar só o início e fim do dia (sem minutos e segundos)
      const startOfDay = new Date(params.createdAt);
      startOfDay.setHours(0);
      startOfDay.setMinutes(0);
      startOfDay.setSeconds(0);
      startOfDay.setMilliseconds(0);

      const endOfDay = new Date(params.createdAt);
      endOfDay.setHours(23);
      endOfDay.setMinutes(59);
      endOfDay.setSeconds(59);
      endOfDay.setMilliseconds(999);
      where['createdAt'] = Between(startOfDay, endOfDay);
    }
    if (params.dificuldade) {
      where['dificuldade'] = params.dificuldade;
    }
    if (params.finalizado) {
      where['finalizado'] = params.finalizado;
    }
    if (params.search) {
      where['text'] = ILike(`%${params.search}%`);
      //a pesquisa deve pesquisar o texto.
      //ILike serve para pesquisar qualquer parte do texto
    }

    const skip = (params.page - 1) * params.perPage;

    const entities = await this.find({
      where,
      skip,
      order: {
        complete: 'ASC',
        createdAt: 'DESC',
      },
    });
    return entities;
  }

  async registerItem(input: Partial<TodoEntity>): Promise<TodoEntity> {
    const entity = this.create(input);
    await this.save(entity);
    return entity;
  }
}
