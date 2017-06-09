import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sorteiodetalhes',
  templateUrl: './sorteiodetalhes.component.html',
  styleUrls: ['./sorteiodetalhes.component.css']
})
export class SorteiodetalhesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  recarregar(){
    console.log('recarregar em detalhes');
  }

}
