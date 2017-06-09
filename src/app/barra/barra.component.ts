import { Component, OnInit } from '@angular/core';
import { Config } from '../app.config';

@Component({
  selector: 'app-barra',
  templateUrl: './barra.component.html',
  styleUrls: ['./barra.component.css']
})
export class BarraComponent implements OnInit {

  token:String = '';

  constructor() {
    this.token = Config.TOKEN;
  }

  ngOnInit() {
    
  }

}
