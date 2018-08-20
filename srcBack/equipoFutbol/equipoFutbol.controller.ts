import { Controller, Get, Param, Query } from '@nestjs/common';
import { EquipoFutbolService } from './equipoFutbol.service';

@Controller('equipoFutbol')
export class EquipoFutbolController {


  constructor(private readonly _autorService: EquipoFutbolService){}
  @Get()
  obtenerTodos(@Query() query){
    const skip = query.skip;
    const take = query.take;
    if (isNaN(skip) && isNaN(take))
      return this._autorService.findAll();
    else
      return this._autorService.findSkip(skip, take);
  }

  @Get('buscar/:like')
  obtenerLike(@Param('like') like){
    return this._autorService.findLike(like);
  }
}
