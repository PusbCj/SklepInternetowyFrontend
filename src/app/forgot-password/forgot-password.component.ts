import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {ForgotPWDService} from '../services/forgot.service';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(private forgotPWDService: ForgotPWDService, private messageService: MessageService) { }

  ngOnInit(): void {
  }

  forgotPass(forgetForm: NgForm): void {
    console.log(this.forgotPWDService.sendEmail(forgetForm.value.username).subscribe((res) => {
      this.messageService.add({ severity: 'success', summary: 'Sukces', detail: 'e-mail do zmiany hasła został wysłany na adres przypisany do konta.'});
    }, () => {
      this.messageService.add({ severity: 'error', summary: 'Błąd', detail: ''});
    }));
  }

}
