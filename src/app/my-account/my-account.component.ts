import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {
changeData: FormGroup;
changePassword: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.changeData = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.email]],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      street: ['', Validators.required],
      houseNumber: ['', Validators.required],
      nameAddress: ['', Validators.required],
      postCode: ['', Validators.required]
    });

    this.changePassword = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
      passwordRepeat: ['', [Validators.required]],
    });
  }

  // tslint:disable-next-line:typedef
  get d() { return this.changeData.controls; }

  // tslint:disable-next-line:typedef
  get p() { return this.changePassword.controls; }

  changeUserData(UserData: FormGroup): void{

  }

  changeUserPassword(UserData: FormGroup): void{

  }
}
