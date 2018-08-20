import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JugadorEntity } from './jugador.entity';
import { JugadorService } from './jugador.service';
import { JugadorController } from './jugador.controller';

@Module({
  imports: [ TypeOrmModule.forFeature([JugadorEntity]) ],
  providers: [ JugadorService ],
  controllers: [ JugadorController ],
})
export class JugadorModule {}
