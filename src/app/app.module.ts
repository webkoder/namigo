import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {CookieService} from 'angular2-cookie/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';
import { SorteioService } from './sorteio/sorteio.service';
import { ParticipanteService } from './participante/participante.service';

import 'rxjs/add/operator/map';
import { CadastroComponent } from './cadastro/cadastro.component';
import { InicialComponent } from './inicial/inicial.component';
import { SorteioComponent } from './sorteio/sorteio.component';

import { routing } from './app.routes';
import { SorteiocadastroComponent } from './sorteiocadastro/sorteiocadastro.component';
import { SorteiolistaComponent } from './sorteiolista/sorteiolista.component';
import { ParticipanteComponent } from './participante/participante.component';
import { ParticipantecadastroComponent } from './participantecadastro/participantecadastro.component';
import { ParticipantelistaComponent } from './participantelista/participantelista.component';
import { SorteiodetalhesComponent } from './sorteiodetalhes/sorteiodetalhes.component';
import { MensagemComponent } from './mensagem/mensagem.component';
import { BarraComponent } from './barra/barra.component';

// declare var $:JQueryStatic;

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastroComponent,
    InicialComponent,
    SorteioComponent,
    SorteiocadastroComponent,
    SorteiolistaComponent,
    ParticipanteComponent,
    ParticipantecadastroComponent,
    ParticipantelistaComponent,
    SorteiodetalhesComponent,
    MensagemComponent,
    BarraComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [LoginService, SorteioService, ParticipanteService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
