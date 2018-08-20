import { Injectable } from '@nestjs/common';
import { EquipoFutbolEntity } from './equipoFutbol.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { JugadorEntity } from '../jugador/jugador.entity';
import { UsuarioEntity } from '../usuario/usuario.entity';

@Injectable()
export class EquipoFutbolService {

  constructor(
    @InjectRepository(EquipoFutbolEntity)
    private readonly _autorRepository: Repository<EquipoFutbolEntity>,
  ){}

  async findAll(): Promise<EquipoFutbolEntity[]>{
    return await this._autorRepository.find();
  }


  async findSkip(sk: number, tk: number): Promise<EquipoFutbolEntity[]>{
    return await this._autorRepository.find({
      order: {
        nombre: 'DESC',
      },
      skip: sk,
      take: tk,
    });
  }
  async findLike(lk: string): Promise<EquipoFutbolEntity[]>{
    return await this._autorRepository.find({
      nombre: Like(`%${lk}%`),
    });
  }

}
