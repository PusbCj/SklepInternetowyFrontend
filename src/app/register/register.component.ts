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

  constructor(private router: Router, private messageService: MessageService, private registerService: RegisterService) {
  }

  ngOnInit(): void {
  }

  registerUser(regForm: NgForm): void {
    // tslint:disable-next-line:max-line-length
    this.registerService.register(new RegData(regForm.value.city, regForm.value.email, regForm.value.firstName, regForm.value.houseNumber, regForm.value.lastName, regForm.value.nameAddress, regForm.value.password, regForm.value.postCode, regForm.value.street, regForm.value.username));
  }
}
