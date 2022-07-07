import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-edit-notes',
  templateUrl: './add-edit-notes.component.html',
  styleUrls: ['./add-edit-notes.component.css']
})
export class AddEditNotesComponent implements OnInit {

  constructor(private service:ApiService) { }
  @Input() note:any;
  NoteId:string;
  title:string;
  notes:string;

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

  updateNotes(){
    var val = {NoteId:this.NoteId,
              title:this.title,
              notes:this.notes,};
    this.service.updateNote(val).subscribe(res=>{
    alert(res.toString());
    });
  }

}
