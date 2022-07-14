import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-one-note',
  templateUrl: './one-note.component.html',
  styleUrls: ['./one-note.component.css']
})
export class OneNoteComponent implements OnInit {

  constructor(private router:Router,private service:ApiService) { }
  oneNote:any=[]
href:string
  ngOnInit(): void {
    this.href = this.router.url;
    console.log(this.router.url);
    const url=String(this.router.url).slice(-2)
    console.log(url);
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
