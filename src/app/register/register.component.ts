import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {MessageService} from 'primeng/api';
import {RegisterService} from '../services/register.service';
import {RegData} from '../models/RegData';
import {AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router, private messageService: MessageService, private registerService: RegisterService,
              private formBuilder: FormBuilder) {
  }

  // tslint:disable-next-line:typedef
    get f() { return this.registerForm.controls; }
status = '';
registerForm: FormGroup;

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(8),
        this.patternValidator(/\d/, { hasNumber: true }),
        this.patternValidator(/[A-Z]/, { hasCapitalCase: true }),
        this.patternValidator(/[a-z]/, { hasSmallCase: true }),
        this.patternValidator(/[!@#$%^&*()_+={};'":|,.<>/?-]/, { hasSpecialCharacters: true })]],
      passwordRepeat: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      street: ['', Validators.required],
      houseNumber: ['', Validators.required],
      nameAddress: ['', Validators.required],
      postCode: ['', Validators.required]
    });
  }

  patternValidator(regex: RegExp, error: ValidationErrors): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      if (!control.value) {
        return null;
      }
      const valid = regex.test(control.value);
      return valid ? null : error;
    };
  }

  registerUser(regForm: FormGroup): void {
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
