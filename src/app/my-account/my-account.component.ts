import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';
import {MessageService} from 'primeng/api';
import {ChangePWDService} from '../services/change-pwd.service';
import {PWDData} from '../models/PWDData';
import {ChangeUserDataService} from '../services/change-user-data.service';
import {UserData} from '../models/UserData';
import {SERVER_API_URL} from '../app.constants';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {
  status = '';
  changeData: FormGroup;
  changePassword: FormGroup;
  temp: UserData;

  constructor(private formBuilder: FormBuilder, private messageService: MessageService,
              private changePWDService: ChangePWDService, private changeUserDataService: ChangeUserDataService,
              private http: HttpClient) { }

  ngOnInit(): void {
    this.clearChangeData();

    this.changePassword = this.formBuilder.group({
      newPassword: ['', [Validators.required, Validators.minLength(8),
        this.patternValidator(/\d/, { hasNumber: true }),
        this.patternValidator(/[A-Z]/, { hasCapitalCase: true }),
        this.patternValidator(/[a-z]/, { hasSmallCase: true }),
        this.patternValidator(/[!@#$%^&*()_+={};'":|,.<>/?-]/, { hasSpecialCharacters: true })]],
      oldPassword: ['', [Validators.required]],
      passwordRepeat: ['', [Validators.required]],
    });

    this.getUserFromServer();
    console.log(this.temp);
  }

  clearChangeData(): void{
    this.changeData = this.formBuilder.group({
      city: ['', [Validators.required]],
      currentPassword: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      numberHouse: ['', Validators.required],
      postCode: ['', Validators.required],
      street: ['', Validators.required],
    });
  }

  getUserFromServer(): void {
    this.changeUserDataService.getUserData().subscribe(res => {
      this.temp = res;
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

  // tslint:disable-next-line:typedef
  get d() { return this.changeData.controls; }

  // tslint:disable-next-line:typedef
  get p() { return this.changePassword.controls; }

  changeUserData(Data: FormGroup): void{
    console.log(Data.value);
    this.changeUserDataService.changeUserData(new UserData(Data.value.city, Data.value.currentPassword, Data.value.email,
      Data.value.firstname, Data.value.lastname, Data.value.numberHouse, Data.value.postCode, Data.value.street)).subscribe(res => {
      this.status = 'Dane zostały zmienione';
      this.messageService.add({ severity: 'success', summary: 'Sukces', detail: 'Dane zostały zmienione.'});
    }, res => {
      console.log(res);
      this.status = res.error.message;
      this.messageService.add({severity: 'error', summary: 'Blad', detail: res.error.message});
    });
    this.clearChangeData();
  }

  changeUserPassword(UserPWD: FormGroup): void{
    console.log(UserPWD.value);
    this.changePWDService.changePassword(new PWDData(UserPWD.value.newPassword, UserPWD.value.oldPassword)).subscribe(res => {
      this.status = 'Hasło zostało zmienione.';
      this.messageService.add({ severity: 'success', summary: 'Sukces', detail: 'Hasło zostało zmienione.'});
    }, res => {
      console.log(res);
      this.status = res.error.message;
      this.messageService.add({severity: 'error', summary: 'Blad', detail: res.error.message});
    });
  }
}
