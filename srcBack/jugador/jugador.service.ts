import { Injectable } from '@nestjs/common';
import { JugadorEntity } from './jugador.entity';
import { Like, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UsuarioEntity } from '../usuario/usuario.entity';

@Injectable()
export class JugadorService {

  constructor(
    @InjectRepository(JugadorEntity)
    private readonly _jugadorRepository: Repository<JugadorEntity>,
  ){}

  async findAll(): Promise<JugadorEntity[]>{
    return await this._jugadorRepository.find();
  }

  async findSkip(sk: number, tk: number): Promise<JugadorEntity[]> {
    return await this._jugadorRepository.find({
      order: {
        nombre: 'DESC',
      },
      skip: sk,
      take: tk,
    });
  }

  async findLike(lk: string): Promise<JugadorEntity[]>{
    return await this._jugadorRepository.find({
      nombre: Like(`%${lk}%`),
    });
  }

}
