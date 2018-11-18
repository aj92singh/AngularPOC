import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, ResponseContentType } from '@angular/http';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  public headers: Headers;
  public noCacheHeaders: Headers;

  constructor(private http: Http) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/x-www-form-urlencoded');
    this.headers.append('X-Mashape-Key','DOseCF7orjmshurABfBDNK3iRGxlp1cJMKajsnEPnMUy1TNIxs');
   }

  getQuotes(cat="movies",count=1):Promise<any>{
    this.headers.append('Accept','application/json');
   return this.http.get('https://andruxnet-random-famous-quotes.p.mashape.com/?cat='+cat+'&count='+count,{headers:this.headers}).toPromise()
    .then(this.extractData).catch(this.handleError);
  }
  getCurrencies():Promise<any>{
    this.headers.append('Accept','application/json');
    return this.http.get('https://currency-exchange.p.mashape.com/listquotes',{headers:this.headers}).
    toPromise().then(this.extractData).catch(this.handleError);
  }
  convertCurrency(from ,to):Promise<any>{
    return this.http.get('https://currency-exchange.p.mashape.com/exchange?from='+from+'&q=1+&to='+to,{headers:this.headers}).toPromise()
    .then(this.extractData).catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    console.log(body||{});
    return body || {};
}
private handleError(error: Response | any) {
  let errMsg: string;
  if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
  } else {
      errMsg = error.message ? error.message : error.toString();
  }
  return Promise.reject(errMsg);
}
}
