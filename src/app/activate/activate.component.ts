import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SigninService} from '../services/signin.service';

@Component({
  selector: 'app-activate',
  templateUrl: './activate.component.html',
  styleUrls: ['./activate.component.css']
})
export class ActivateComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private signinService: SigninService) { }
  keyUser = '';
  user = '';
  info = '';
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.keyUser = params.key;
      this.user = params.user;
      this.activate();
    });
  }
  activate(): void{
    this.signinService.activate(this.user, this.keyUser).subscribe(res => {
      this.info = 'Aktywowano użytkownika ' + this.user + ' możesz sie teraz zalogować.';
    }, error => {
      this.info = 'Aktywacja sie nie powiodla, nieprawidłowy klucz aktywacyjny';
    });
  }

}
