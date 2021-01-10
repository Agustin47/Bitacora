import { Storage } from '@ionic/storage';
import { Flower } from '..';
import { Entity } from './entity';
import { Injectable } from '@angular/core';

@Injectable()
export class Context {

    public flowers: Entity<Flower>;

    constructor(private storage: Storage) {
        this.flowers = new Entity<Flower>(storage, 'flowers');
    }
}


/* ///

storage
    modelo[]
    context
        modelos[]
        funciones de add.

servicios
    agregar
    buscar




/// */



