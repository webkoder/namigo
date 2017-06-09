import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {


  email: string = '';
  senha1: string = '';
  senha2: string = '';
  name: string = '';
  remember_token:string = '';
  service: LoginService;

  constructor(service: LoginService) {
    this.service = service;
   }

  ngOnInit() {
  }

  cadastrar(event){
    event.preventDefault();

    // this.service.entrar(this);
    this.service.cadastrar(this)
      .subscribe(
        st => {
          //this.token = st;
          console.log('resposta ' + st);
        },
        erro => console.log(erro)
      );
    
  }

}
