import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { EquipoFutbolEntity } from '../equipoFutbol/equipoFutbol.entity';

@Entity('Usuario')
export class UsuarioEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  usuario: string;

  @Column()
  password: string;

  @Column()
  imagenUrl: string;

  @OneToMany(type => EquipoFutbolEntity,
  equipoFutbol => equipoFutbol.usuario)
  equipoFutbol: EquipoFutbolEntity[];

}