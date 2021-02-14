import { Injectable } from '@angular/core';
import { Context, Water } from '../models';

@Injectable()
export class FlowerProvider {
    constructor(private context: Context) { 
    }

    async getWaters(flowerId: string) : Promise<Water[]> {
        let waters = await this.context.waters.getAll();

        return waters.filter(w => w.flowerId === flowerId);
    }  
}
