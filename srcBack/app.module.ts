import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { UsuarioModule } from './usuario/usuario.module';
import { EquipoFutbolController } from './equipoFutbol/equipoFutbol.controller';
import { EquipoFutbolModule } from './equipoFutbol/equipoFutbol.module';
import { JugadorController } from './jugador/jugador.controller';
import { JugadorService } from './jugador/jugador.service';
import { JugadorModule } from './jugador/jugador.module';
import { CorsMiddleware } from './cors/cors.middleware';
import { UsuarioController } from './usuario/usuario.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
        type: 'mysql',
        host: 'bandres-jar.mysql.database.azure.com',
        port: 3306,
        username: 'brix@bandres-jar',
        password: 'AzureBDD5.',
        database: 'examenweb2',
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: false,
        ssl :true,
    }),
    UsuarioModule,
    EquipoFutbolModule,
    JugadorModule,
  ],
  controllers: [ AppController ],
  providers: [ AppService ],
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer): MiddlewareConsumer | void {
    consumer
      .apply(CorsMiddleware)
      .with('AppModule')
      .forRoutes(UsuarioController, JugadorController, EquipoFutbolController);
  }
  constructor(private readonly _connection: Connection){}
}
