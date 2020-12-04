import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {MessageService} from 'primeng/api';
import {RegisterService} from '../services/register.service';
import {NgForm} from '@angular/forms';
import {RegData} from '../models/RegData';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
status = '';
  constructor(private router: Router, private messageService: MessageService, private registerService: RegisterService) {
  }

  ngOnInit(): void {
  }

  registerUser(regForm: NgForm): void {
    console.log(regForm.value);
    this.registerService.register(new RegData(regForm.value.city, regForm.value.email, regForm.value.firstName, regForm.value.houseNumber,
      regForm.value.lastName, regForm.value.nameAddress, regForm.value.password, regForm.value.postCode, regForm.value.street,
      regForm.value.username)).subscribe(res => {
      this.status = 'Rejestracja zakończona, na podany e-mail została wysłana wiadomość.';
      this.messageService.add({ severity: 'success', summary: 'Sukces', detail: 'Rejestracja zakończona, na podany e-mail została wysłana wiadomość.'});
      this.router.navigate(['/start']);
    }, res => {
        console.log(res);
        this.status = res.error.message;
        this.messageService.add({severity: 'error', summary: 'Blad', detail: res.error.message});
    });
  }
}
