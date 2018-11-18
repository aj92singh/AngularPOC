import { Component, OnInit } from '@angular/core';
import {SharedService} from '../shared.service';
import { promise } from 'protractor';


@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css'],
  providers:[SharedService]
})
export class CurrencyComponent implements OnInit {
busy:Promise<any>;
convert:Promise<any>;
Fromvalue:string="Select From";
Tovalue:string="Select To";
amount:number=1;
convertedValue:number=0;

Currencies:any;
  constructor(private _sharedService:SharedService) { }

  ngOnInit() {
    this.getCurrencyTypes()
  }
  getCurrencyTypes(){
this.busy=this._sharedService.getCurrencies().then(data=>{
this.bindCurrencies(data)
});
  }
  bindCurrencies(data){
this.Currencies=data;
  }
  setCurrency(data,isFrom){
    this.convertedValue=0;
    if(isFrom){
this.Fromvalue=data;
  }
  else this.Tovalue=data;
}
convertCurrency(){
  if(this.Fromvalue=="Select From" || this.Tovalue=="Select To"){
    this.convertedValue=0;
    alert("Select proper values for conversion");
  }
  else{
  this.convert=this._sharedService.convertCurrency(this.Fromvalue,this.Tovalue).then(data=>{
    this.displayResult(data)

  })
}
}
displayResult(data){
this.convertedValue=data;
}
}
