import { RouterModule, Routes, ROUTER_CONFIGURATION} from '@angular/router';
import { InicialComponent} from './inicial/inicial.component';
import { SorteiolistaComponent} from './sorteiolista/sorteiolista.component';
import { SorteiodetalhesComponent} from './sorteiodetalhes/sorteiodetalhes.component';
import { SorteiocadastroComponent} from './sorteiocadastro/sorteiocadastro.component';

const appRoutes: Routes = [
    { path: '', component: SorteiolistaComponent},
    { path: 'login', component: InicialComponent},
    { path: 'sorteio', component: SorteiolistaComponent},    
    { path: 'sorteio/cadastro', component: SorteiocadastroComponent},    
    { path: 'sorteio/:id', component: SorteiodetalhesComponent},
    { path: '**', component: InicialComponent},
];

export const routing = RouterModule.forRoot(appRoutes);

// { path: 'cadastro/:id', component: CadastroComponent},