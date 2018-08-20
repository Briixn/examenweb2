import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { EquipoFutbolEntity } from '../equipoFutbol/equipoFutbol.entity';

@Entity('Jugador')
export class JugadorEntity {


    @PrimaryGeneratedColumn()
    idJugador: number;
    @Column()
    numeroCamiseta: number;

    @Column({length: 500})
    nombreCamiseta: string;

    @Column({length: 500})
    nombreCompletoJugador: string;
    @Column({length: 500})
    poderEspecialDos: string;

    @Column()
    goles: number;

    @Column()
    imagenUrl: string;


  @ManyToOne( type => EquipoFutbolEntity,
      equipoFutbol => equipoFutbol.jugador)

  equipoFutbol: EquipoFutbolEntity;
}