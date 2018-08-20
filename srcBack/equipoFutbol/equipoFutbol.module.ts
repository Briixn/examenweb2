import { Module } from '@nestjs/common';
import { EquipoFutbolService } from './equipoFutbol.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EquipoFutbolEntity } from './equipoFutbol.entity';
import { EquipoFutbolController } from './equipoFutbol.controller';

@Module({
  imports: [ TypeOrmModule.forFeature([EquipoFutbolEntity])],
  providers: [EquipoFutbolService],
  controllers: [EquipoFutbolController],
})
export class EquipoFutbolModule {}
