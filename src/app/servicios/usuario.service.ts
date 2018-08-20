import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private _usuario=[];

  constructor() {
    this._usuario = [
      {
        id:1,
        nickname: 'Brix',
        nombre: 'Andres Jarrin',
        correoElectronico: 'bryan.jarrin@epn.edu.ec',
        imagen: '',
        direccion: 'Queti'
      }];
  }

  public getUsuario(){
    return this._usuario;
  }
}
