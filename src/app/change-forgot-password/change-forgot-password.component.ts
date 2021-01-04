import { Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';
import {ActivatedRoute} from '@angular/router';
import {AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';
import {ForgotPWDService} from '../services/forgot.service';
import {ChgForgotPwd} from '../models/ChgForgotPwd.model';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './change-forgot-password.component.html',
  styleUrls: ['./change-forgot-password.component.css']
})
export class ChangeForgotPasswordComponent implements OnInit {
user = '';
key = '';
changePassword: FormGroup;

  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder, private messageService: MessageService,
              private forgotPWDService: ForgotPWDService) { }

  ngOnInit(): void {
    this.user = this.route.snapshot.queryParamMap.get('user');
    this.key = this.route.snapshot.queryParamMap.get('key');

    this.changePassword = this.formBuilder.group({
      newPassword: ['', [Validators.required, Validators.minLength(8),
        this.patternValidator(/\d/, { hasNumber: true }),
        this.patternValidator(/[A-Z]/, { hasCapitalCase: true }),
        this.patternValidator(/[a-z]/, { hasSmallCase: true }),
        this.patternValidator(/[!@#$%^&*()_+={};'":|,.<>/?-]/, { hasSpecialCharacters: true })]],
      oldPassword: ['', [Validators.required]],
      passwordRepeat: ['', [Validators.required]],
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

  get p() { return this.changePassword.controls; }

  newPass(newPass: FormGroup): void {
    const temp = new ChgForgotPwd(this.key, newPass.value.newPassword, this.user)
    this.forgotPWDService.changePass(new ChgForgotPwd(this.key, newPass.value.newPassword, this.user)).subscribe(res => {
      this.messageService.add({ severity: 'success', summary: 'Sukces', detail: 'Hasło zostało zmienione.'});
    }, res => {
      this.messageService.add({severity: 'error', summary: 'Blad', detail: res.error.message});
    });
    console.log(temp);
  }
}
