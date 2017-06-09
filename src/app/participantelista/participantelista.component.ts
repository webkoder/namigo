import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ParticipanteService } from '../participante/participante.service';
import { ParticipanteComponent } from '../participante/participante.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'participantelista',
  templateUrl: './participantelista.component.html',
  styleUrls: ['./participantelista.component.css']
})
export class ParticipantelistaComponent implements OnInit {

  service: ParticipanteService;
  lista: ParticipanteComponent[] = [];
  sorteio_id: number;
  participante_selecionado: string = '';
  @Output() onSelecionado: EventEmitter<ParticipanteComponent> = new EventEmitter();

  constructor(service: ParticipanteService, route:ActivatedRoute) {
    this.service = service;
    route.params.subscribe(params => {
        let id = params['id'];
        if(id){
          this.sorteio_id = id;
            // this.service
            //     .buscaPorId(id)
            //     .subscribe(
            //         foto => this.foto = foto,
            //         erro => console.log(erro)
            //     );
        }
    });
  }

  ngOnInit() {
    this.listar();
  }

  listar(){
    this.service.listar(this.sorteio_id)
      .subscribe(
        st => {
          this.lista = st;          
        },
        erro => console.log(erro)
      );
  }

  adicionar(participante: ParticipanteComponent){
    console.log('recarregando');
    this.lista.push(participante);
  }

  selecionado(e){
    if(e.acao == 'editar')
      this.participante_selecionado = JSON.stringify(this.lista[this.getById(e.id)]);
    else
      this.service.remover(e.id)
        .subscribe(res => {
          console.log(res);
          this.lista.splice(this.getById(e.id));
        },
        erro => {
          console.log(erro);
        });
  }

  adicionado(e){
    let npart = JSON.parse(e);
    let editado = false;
    this.lista.forEach((v,i)=>{
      if(v.id == npart.id){
        v.nome = npart.nome;
        v.email = npart.email;
        editado = true;
      }
    });
    if(!editado) this.lista.push(npart);
  }

  getById(id){
    let pos = -1;
    this.lista.forEach((v, i) => {
      if(v.id == id){
        pos = i;
      }
    });
    return pos;
  }

}
