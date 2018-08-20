import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { UsuarioEntity } from '../usuario/usuario.entity';
import { JugadorEntity } from '../jugador/jugador.entity';

@Entity('EquipoFutbol')
export class EquipoFutbolEntity {
    @PrimaryGeneratedColumn()
    idEquipoFutbol: number;
    @Column({length: 500})
    nombre: string;

    @Column({length: 500})
    liga: string;

    @Column()
    numeroCopasInternacionales: number;
    @Column()
    campeonActual: boolean;

    @Column()
    imagenUrl: string;

  @ManyToOne( type => UsuarioEntity,
  usuarioEntity => usuarioEntity.equipoFutbol)
  usuario: UsuarioEntity;

  @OneToMany( type => JugadorEntity,
      jugador => jugador.equipoFutbol)

  jugador: JugadorEntity[];

}