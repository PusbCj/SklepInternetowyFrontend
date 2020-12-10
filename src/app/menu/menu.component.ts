import { Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private messageService: MessageService, private router: Router) { }

  ngOnInit(): void {
    this.messageService.add({severity: 'success', summary: 'Service Message', detail: 'Via MessageService'});
  }


  logOut(): void{
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('token');
    this.messageService.add({ severity: 'info', summary: 'Informacja', detail: 'Wylogowano'});
    this.router.navigate(['/']);
  }

  isNotLogged(): boolean {
    return sessionStorage.getItem('user') == null;
  }
  items(): string {
    if (sessionStorage.getItem('items') === null){
      return String(0);
    }
    return sessionStorage.getItem('items');
  }
}
