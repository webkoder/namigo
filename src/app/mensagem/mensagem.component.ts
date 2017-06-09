import { Component, OnInit, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'mensagem',
  templateUrl: './mensagem.component.html',
  styleUrls: ['./mensagem.component.css']
})
export class MensagemComponent implements OnInit {

  @Input() texto: string = '';
  @Input() tipo: string = 'info';

    constructor(){
        
    }

  ngOnInit() {
  }

  setTexto(texto:string, tipo: string){
    this.tipo = tipo;
    this.texto = texto;
  }

  

}
