import { Injectable } from '@angular/core';

@Injectable()
export class GeneralProvider {
    constructor() { }

    getTodayString() : string {
        let today = new Date();
        let month = ('0' + (today.getMonth() + 1));
        let day   = ('0' + today.getDate());
        
        return `${today.getFullYear()}-${month.substring(month.length-2)}-${day.substring(day.length-2)}`;
    }  
}
