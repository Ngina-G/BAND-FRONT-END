import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Emitters } from 'src/app/core/emitters/emitters';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  show = false;
  authenticated = false;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    Emitters.authEmitter.subscribe(
      (auth: boolean) => {
        this.authenticated = auth;
      }
    );
  }

  logout(): void {
    this.http.post('https://auth-doyo.herokuapp.com/api/logout/', {}, {withCredentials: true})
      .subscribe(() => this.authenticated = false);
  }

}
