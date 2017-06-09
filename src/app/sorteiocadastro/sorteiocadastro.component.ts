import { Component, OnInit } from '@angular/core';
import { SorteioComponent } from '../sorteio/sorteio.component';
import { SorteioService } from '../sorteio/sorteio.service';

@Component({
  selector: 'sorteiocadastro',
  templateUrl: './sorteiocadastro.component.html',
  styleUrls: ['./sorteiocadastro.component.css']
})
export class SorteiocadastroComponent implements OnInit {

  sorteio: SorteioComponent = new SorteioComponent();
  service: SorteioService;

  constructor(service: SorteioService) {
    this.service = service;
  }

  ngOnInit() {
  }

  cadastrar(event){
    event.preventDefault();

    // this.service.entrar(this);
    this.service.cadastrar(this.sorteio)
      .subscribe(
        st => {
          //this.token = st;
          console.log('resposta ' + st);
        },
        erro => console.log(erro)
      );

  }

}
