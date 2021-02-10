import { Injectable } from '@angular/core';
import { StringBuilder } from './helpers/string-builder';

@Injectable()
export class GeneralProvider {
    constructor() { }

    getTodayString() : string {
        let today = new Date();
        let month = ('0' + today.getMonth());
        let day   = ('0' + today.getDay());
        return `${today.getFullYear()}-${month.substring(month.length-2)}-${day.substring(day.length-2)}`;
    }  
}
