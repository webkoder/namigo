import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { SorteioComponent } from './sorteio.component';
import { CookieService } from 'angular2-cookie/core';
import { Config } from '../app.config';

@Injectable()
export class SorteioService {

  http: Http;
  api: string = Config.API_URL + 'sorteio/';
  headers: Headers;
  cookies: CookieService;

  constructor(http: Http, cookies: CookieService) {
    this.http = http;
    this.cookies = cookies;
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Access-Control-Allow-Origin','*');
    this.headers.append('Access-Control-Max-Age','1728000');
    this.headers.append('Token-Api', this.cookies.get('remember_token'));
  }

  listar(): Observable<SorteioComponent[]>{
    return this.http
      .get(this.api + 'listar', { headers: this.headers, withCredentials: true })
      .map(res => res.json());
  }

  cadastrar(cadastro: SorteioComponent){
    console.log(JSON.stringify(this.cookies.get('remember_token')));    
    return this.http
      .post(this.api + 'cadastrar', JSON.stringify(cadastro), { headers: this.headers, withCredentials: true })
      .map(res => console.log(res), erro => console.log(erro));
  }

}
