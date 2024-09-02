import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Password } from 'primeng/password';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router) { }


  login: any = {
    username: '',
    Password: ''
  }
  submit() {
    if (this.login.username != '' && this.login.password != '') {
      this.router.navigateByUrl('/form1');
      console.log('viany');
    }
  }
}
