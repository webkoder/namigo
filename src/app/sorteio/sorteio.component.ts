import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'sorteio',
  templateUrl: './sorteio.component.html',
  styleUrls: ['./sorteio.component.css']
})
export class SorteioComponent implements OnInit {

  @Input() id: number = 0;
  @Input() titulo: string = '';
  @Input() entrega: string = '';
  entregadata: string = '';

  //service: SorteioService;
  //lista: SorteioComponent[];

// constructor(service: SorteioService) {
constructor() {
    
}

ngOnInit() {
  let valz = this.entrega.split('-');
  this.entregadata = valz[2] + '.' + valz[1] + '.' + valz[0];
}

}
