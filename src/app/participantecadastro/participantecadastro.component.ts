import { Component, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { ParticipanteComponent } from '../participante/participante.component';
import { ParticipantelistaComponent } from '../participantelista/participantelista.component';
import { ParticipanteService } from '../participante/participante.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'participantecadastro',
  templateUrl: './participantecadastro.component.html',
  styleUrls: ['./participantecadastro.component.css']
})
export class ParticipantecadastroComponent implements OnChanges {


  @Input() participante: ParticipanteComponent = new ParticipanteComponent();
  service: ParticipanteService;
  recarregar: Observable<boolean>;
  @Input() lista: ParticipantelistaComponent;
  @Input() selecionado: ParticipanteComponent;
  //route = this.route;
  @Input() eparticipante: string = '';
  @Output() adicionar: EventEmitter<string> = new EventEmitter();

  constructor(service: ParticipanteService, route:ActivatedRoute) {
    this.service = service;
    route.params.subscribe(params => {
        let id = params['id'];
        if(id){
          this.participante.sorteio_id = id;
        }
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(typeof changes['eparticipante'] == 'undefined') return;
    let dados = changes['eparticipante'].currentValue;
    if(dados.length == 0) return;
    this.participante = JSON.parse(dados);

  }

  cadastrar(event){
    event.preventDefault();

    this.service.cadastrar(this.participante)
      .subscribe(
        st => {
          //this.token = st;
          console.log(st);
          this.participante = st;
          // console.log(this.lista);
          //this.lista.adicionar(this.participante);
          this.adicionar.emit(JSON.stringify(this.participante));
          this.participante = new ParticipanteComponent();
        },
        erro => console.log(erro)
      );
  }

}
