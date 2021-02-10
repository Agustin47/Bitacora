import { Component, EventEmitter, Input, Output } from '@angular/core';
import { StringBuilder } from '../../provider';

@Component({
  selector: 'decimal-input',
  templateUrl: 'decimal-input.html'
})
export class DecimalInputComponent {

  @Input() title: string;
  @Input() amount: string;
  @Output() valueUpdate = new EventEmitter<string>();

  constructor() { }

  formatNumber(e: any, separador: string = '.', decimais: number = 2) {
    /*let a:any = e.value.split('');
    let ns:string = '';
    a.forEach((c:any) => { if (!isNaN(c)) ns = ns + c; });
    ns = parseInt(ns).toString();
    if (ns.length < (decimais+1)) { ns = ('0'.repeat(decimais+1) + ns); ns = ns.slice((decimais+1)*-1); }
    let ans = ns.split('');
    let r = '';
    for (let i=0; i < ans.length; i++) if (i == ans.length - decimais) r = r + separador + ans[i]; else r = r + ans[i];
    e.value = r;
    */

    let stringBuilder = new StringBuilder();
    let letters = e.value.split('');

    letters.forEach(l => {
      if(!isNaN(l) || l === separador) stringBuilder.Append(l);
    });

    e.value = stringBuilder.ToString();
    this.valueUpdate.emit(e.value);
  }

  onKeypress(event){
    if(event.key == '.')
      this.amount = this.amount.replace(event.key, '');
    
    console.log(event.key, this.amount);
    

  }
}
