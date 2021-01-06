import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Contact} from '../models/Contact.model';
import {ContactService} from '../services/contact.service';
import {Router} from '@angular/router';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
contactForm: FormGroup;
contact: Contact;

  // tslint:disable-next-line:max-line-length
  constructor(private formBuilder: FormBuilder, private contactService: ContactService, private router: Router, private messageService: MessageService) { }

  ngOnInit(): void {
    this.contact = {};
    this.contactForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required]]
    });
  }

  get p() { return this.contactForm.controls; }

  send(contactForm: FormGroup): void {
    this.contact.email = contactForm.value.email;
    this.contact.name = contactForm.value.name;
    this.contact.message = contactForm.value.message;
    console.log(this.contact);
    this.contactService.sendMessage(this.contact).subscribe(res => {
      this.messageService.add({ severity: 'success', summary: 'Sukces', detail: 'Wiadomość została wysłana.'});
      this.router.navigate(['/start']);
    }, res => {
      this.messageService.add({severity: 'error', summary: 'Blad', detail: res.error.message});
    });

  }
}
