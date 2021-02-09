import { Injectable } from '@angular/core';

@Injectable()
export class GeneralProvider {

    constructor() {
    }

    getTodayString() : string {
        let today = new Date();
        let month = ('0' + today.getMonth());
        let day   = ('0' + today.getDay());
        return `${today.getFullYear()}-${month.substring(month.length-2)}-${day.substring(day.length-2)}`;
    }

    newGuid(): string {
        let builder = new StringBuilder();
        for (let j = 0; j < 32; j++) {
            if (j == 8 || j == 12 || j == 16 || j == 20)
                builder.Append('-');
            builder.Append( Math.floor(Math.random() * 16).toString(16).toUpperCase() );            
        }
        return builder.ToString();
    }
}


class StringBuilder
 {
    strArray: Array<string> = new Array<string>();
    constructor()
    {
        
    }
    Get(nIndex:number): string
    {
      let str:string = null;
      if( (this.strArray.length > nIndex) && (nIndex >= 0) )
      {
         str = this.strArray[nIndex];
      }
      return(str);
    }
    IsEmpty(): boolean
    {
       if(this.strArray.length == 0) return true;
       return(false);
    }
    Append(str: string): void
    {
        if(str != null)
           this.strArray.push(str);
    }
    ToString(): string
    {
        let str:string = this.strArray.join("");
        return(str);
    }

    ToArrayString(delimeter: string): string
    {
        let str:string = this.strArray.join(delimeter);
        return(str);
    }

    Clear()
    {
        this.strArray.length = 0;
    }
 }