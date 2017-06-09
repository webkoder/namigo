import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { LoginComponent } from './login.component';
import { CadastroComponent } from '../cadastro/cadastro.component';
import { CookieService } from 'angular2-cookie/core';
import { Config } from '../app.config';

@Injectable()
export class LoginService {

  http: Http;
  headers: Headers;
  cookies: CookieService;

  constructor(http: Http, cookies: CookieService) {
    this.http = http;
    this.headers = new Headers();
    this.cookies = cookies;
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Access-Control-Allow-Origin','*');
    this.headers.append('Access-Control-Max-Age','1728000');
    let ck = this.cookies.get('remember_token');
    if(ck){
      if(ck.length > 0){
        this.headers.append('Token-Api', ck);
      }
    }
  }

  getToken(): Observable<string>{
    return this.http
      .get(Config.API_URL + 'token')
      .map(res => res.json());
  }
  
  getUserData(): Observable<LoginComponent>{
    return this.http
      .get(Config.API_URL + 'userdata', { headers: this.headers, withCredentials: true })
      .map(res => res.json(), erro => JSON.parse(erro._body) );
  }

  entrar(login: Object):Observable<LoginComponent>{
    console.log(JSON.stringify(login));
    return this.http
      .post(Config.API_URL + 'login', JSON.stringify(login), { headers: this.headers })
      .map(res => res.json(), erro => JSON.parse(erro._body) );
  }

  cadastrar(cadastro: CadastroComponent){
    console.log(JSON.stringify(cadastro));
    return this.http
      .post(Config.API_URL + 'cadastrar', JSON.stringify(cadastro), { headers: this.headers })
      .map(res => console.log(res), erro => console.log(erro));
  }

}


