import { Component, OnInit } from '@angular/core';
import { SorteioService } from '../sorteio/sorteio.service';
import { SorteioComponent } from '../sorteio/sorteio.component';


@Component({
  selector: 'app-sorteiolista',
  templateUrl: './sorteiolista.component.html',
  styleUrls: ['./sorteiolista.component.css']
})
export class SorteiolistaComponent implements OnInit {

  service: SorteioService;
  lista: SorteioComponent[] = [];

  constructor(service: SorteioService) {
    this.service = service;
  }

  ngOnInit() {
    
    this.service.listar()
      .subscribe(
        st => {
          this.lista = st;
        },
        erro => console.log(erro)
      );
    }

}
