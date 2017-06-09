import { Component, OnInit, ViewChild } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { Cookie } from 'ng2-cookies';
import { MensagemComponent } from '../mensagem/mensagem.component';
import { Config } from '../app.config';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string = '';
  password: string = '';
  remember_token: string = '';
  service: LoginService;
  router: Router;
  mensagem: MensagemComponent = new MensagemComponent();
  btnTexto: string = 'Entrar';
  btnDisabled: string = '';

  constructor(service: LoginService, router: Router) {
    this.service = service;
    this.router = router;
   }

  ngOnInit() {
    this.remember_token = Cookie.get('remember_token');
    Config.TOKEN = this.remember_token;
    if(this.remember_token.length > 0){
      this.service.getUserData()
      .subscribe(
        st => {
          this.email = st.email;
        },
        erro => console.log(erro)
      );
    }
  }

  entrar(event){
    event.preventDefault();
    this.btnEntrando(true);


    let logindados = {email: this.email, password: this.password};

    // Simulando erro
    // this.mensagem.setTexto('Estamos com dificuldades técnicas, tente novamente mais tarde', 'danger');
    // return;

    this.service.entrar(logindados)      
      .subscribe(
        st => {
          this.remember_token = st.remember_token;
          Cookie.set('remember_token', st.remember_token);
          Config.TOKEN = st.remember_token;
          console.log(st);
          this.router.navigateByUrl('/sorteio');
        },
        erro =>{
          let obje = erro.json();
          if(obje.texto){
            this.mensagem.setTexto(obje.texto, 'danger');
          }else{
            this.mensagem.setTexto('Estamos com dificuldades técnicas, tente novamente mais tarde', 'danger');
          }
          console.log(obje);
          
          this.btnEntrando(false);
        });
    
  }

  btnEntrando(b){
    if(b){
      this.btnTexto = 'Entrando';
      this.btnDisabled = 'disabled';
    }else{
      this.btnTexto = 'Entrar';
      this.btnDisabled = '';
    }
  }

  limpar(){
    this.mensagem.texto = '';
    this.btnEntrando(false);
  }

  sair(){
    Config.TOKEN = '';
    Cookie.deleteAll();
    this.email = '';
    this.remember_token = '';
    this.router.navigateByUrl('/login');
    this.limpar();
  }

}
