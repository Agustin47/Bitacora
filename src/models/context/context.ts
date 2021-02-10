import { Storage } from '@ionic/storage';
import { Flower, Water } from '..';
import { Entity } from './entity';
import { Injectable } from '@angular/core';

@Injectable()
export class Context {

    public flowers: Entity<Flower>;
    public waters:  Entity<Water>;

    constructor(private storage: Storage) {
        this.flowers = new Entity<Flower>(this.storage, 'flowers');
        this.waters  = new Entity<Water>(this.storage, 'waters');
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



