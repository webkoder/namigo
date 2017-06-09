import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { ParticipanteComponent } from './participante.component';
import { CookieService } from 'angular2-cookie/core';
import { Config } from '../app.config';

@Injectable()
export class ParticipanteService {

  http: Http;
  api: string = Config.API_URL + 'participante/';
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

  listar(sorteio_id): Observable<ParticipanteComponent[]>{
    return this.http
      .get(this.api + 'listar/' + sorteio_id, { headers: this.headers, withCredentials: true })
      .map(res => res.json());
  }

  cadastrar(cadastro: ParticipanteComponent){
    return this.http
      .post(this.api + 'cadastrar', JSON.stringify(cadastro), { headers: this.headers, withCredentials: true })
      .map(res => res.json(), erro => console.log(erro));
  }

  remover(id: number){
    return this.http
      .delete(this.api + id, { headers: this.headers, withCredentials: true })
      .map(res => res.json(), erro => console.log(erro));
  }

}
