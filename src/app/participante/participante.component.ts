import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'participante',
  templateUrl: './participante.component.html',
  styleUrls: ['./participante.component.css']
})
export class ParticipanteComponent implements OnInit {

  @Input() id: number = 0;
  @Input() nome: string = '';
  @Input() email: string = '';
  @Input() sorteio_id: number = 0;
  @Output() selecionar: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  editarForm(){
    this.selecionar.emit({"id":this.id, "acao":"editar"});
  }

  remover(){
      this.selecionar.emit({"id":this.id, "acao":"remover"});    
  }

}
