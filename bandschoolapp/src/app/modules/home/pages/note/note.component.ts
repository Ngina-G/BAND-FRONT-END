import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
  show = false;
  constructor(private service:ApiService) { }

  @Input() note:any=[];
  NoteId!:string;
  title!:string;
  notes!:string;
  ngOnInit(): void {
    this.NoteId=this.note.NoteId;
    this.title=this.note.title;
    this.notes=this.note.notes;
  }

  addNotes(){
    var val = {NoteId:this.NoteId,
                title:this.title,
                notes:this.notes,};
    this.service.addNote(val).subscribe(res=>{
      alert(res.toString());
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
