import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Emitters } from 'src/app/core/emitters/emitters';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent implements OnInit {

  constructor(private service:ApiService,private router:Router,private http:HttpClient) { }

  show = true;

  @Input() note:any=[];
  NoteId!:string;
  title!:string;
  notes!:string;
  message=''
  authenticated=false
  ngOnInit(): void {
    this.NoteId=this.note.NoteId;
    this.title=this.note.title;
    this.notes=this.note.notes;
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
    Emitters.authEmitter.subscribe(
      (auth: boolean) => {
        this.authenticated = auth;
      }
    );

  }

  addNotes(){
    var val = {NoteId:this.NoteId,
                title:this.title,
                notes:this.notes,};
    this.service.addNote(val).subscribe(res=>{
      alert(res.toString());
      this.router.navigate(['all-notes'])
    });
  }

  updateNotes():void{
    var val = {NoteId:this.NoteId,
              title:this.title,
              notes:this.notes,};
    this.service.updateNote(this.NoteId,val).subscribe(res=>{
    alert(res.toString());
    });
  }

}
