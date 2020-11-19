import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {MessageService} from 'primeng/api';
import {SigninService} from '../services/signin.service';
import {UsernamePassword} from '../models/UsernamePassword.model';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  status = '';
  constructor(private router: Router, private messageService: MessageService, private signinService: SigninService) { }

  ngOnInit(): void {
  }

  loginUser(loginForm: NgForm): void{
    console.log(loginForm.value);
    this.signinService.signin(new UsernamePassword(loginForm.value.username, loginForm.value.password)).subscribe((resp) => {
        sessionStorage.setItem('user', loginForm.value.username);
        this.status = 'sukces';
        this.messageService.add({ severity: 'success', summary: 'Sukces', detail: 'Logowanie przebiegło pomyślnie'});
        window.history.back();
        // this.router.navigate(['/start']);
      }, () => {
        this.status = 'Błedne hasło lub login';
        this.messageService.add({ severity: 'error', summary: 'Blad', detail: 'Nie udało sie zalogować'});
        sessionStorage.removeItem('user');
        sessionStorage.removeItem('token');
      }
    );
  }

}
