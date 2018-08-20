import { Controller, Get, Param, Query } from '@nestjs/common';
import { JugadorService } from './jugador.service';

@Controller('jugador')
export class JugadorController {


  constructor(private readonly _jugadorService: JugadorService){}

  @Get()
  obtenerTodos(@Query() query){
    const skip = query.skip;
    const take = query.take;
    if (isNaN(skip) && isNaN(take))
      return this._jugadorService.findAll();
    else
      return this._jugadorService.findSkip(skip, take);
  }

  @Get('buscar/:like')
  obtenerLike(@Param('like') like){
    return this._jugadorService.findLike(like);
  }
}
