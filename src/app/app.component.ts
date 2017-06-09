import { Component } from '@angular/core';
import { Cookie } from 'ng2-cookies';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Vas';
  // router: Router;

  constructor(router: Router){
    // Verificar se o usuario está autenticado
    if(!Cookie.check('remember_token')){
      // this.router = router;
      router.navigateByUrl('/login');
    }
  }
}
