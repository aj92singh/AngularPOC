import { Component, OnInit } from '@angular/core';
import {SharedService} from '../shared.service';
import {QuotesModel} from '../Models/quotesData';
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css'],
  providers:[SharedService]
})
export class QuotesComponent implements OnInit {
busy:Promise<any>;
quotes:QuotesModel[];
public catvalue:string="Select One";
public numberofQuotes:number=1;
public categories: string[]=["movies","famous"];

  constructor(private _sharedService: SharedService) { }
  ngOnInit() {
  }
  setCategory(data:string){
    this.catvalue=data;
  }
  getQuotes(){
    if(this.catvalue=="Select One"){
      alert("Select proper category");
    }else{
    this.busy= this._sharedService.getQuotes(this.catvalue,this.numberofQuotes).then(data=>{
      console.log(data);
      this.parseQuotes(data);
    });
    }
  }
  parseQuotes(data){
this.quotes=[];
data.forEach(x=>{
  this.quotes.push({author:x.author,quote:x.quote,category:x.category});
})
console.log(this.quotes);
  }
}
