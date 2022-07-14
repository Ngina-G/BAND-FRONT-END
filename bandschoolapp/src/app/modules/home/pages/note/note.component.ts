// import { HttpClient } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Emitters } from 'src/app/core/emitters/emitters';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
  constructor(private router:Router,private service:ApiService,private http:HttpClient) { }
  oneNote:any=[]
  show=false
href:string;
message='';
  ngOnInit(): void {
    this.href = this.router.url;
    console.log(this.router.url);
    const url=String(this.router.url).slice(-2)
    console.log(url);
  this.http.get('https://auth-doyo.herokuapp.com/api/user/', {withCredentials: true}).subscribe(
      (res: any) => {
        this.message =  `Welcome Back ${res.username}`;
        Emitters.authEmitter.emit(true);
      },
      err => {
        this.message = 'You are not logged in';
        Emitters.authEmitter.emit(false);
      }
    );
this.service.getOneNote(url).subscribe(
  data => {
    this.oneNote = data;
  },
  error => {
    console.log(error);
  }
  );
  }

}
