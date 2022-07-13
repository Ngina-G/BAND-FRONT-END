import { Component, OnInit } from '@angular/core';
import { Emitters } from 'src/app/core/emitters/emitters';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-all-notes',
  templateUrl: './all-notes.component.html',
  styleUrls: ['./all-notes.component.css']
})
export class AllNotesComponent implements OnInit {
  constructor(private service:ApiService) { this.getNotes()}
note:any=[]
  ngOnInit(): void {
    this.refreshNoteList();
    
  }
  getNotes =  () => {
    this.service.getAllNotes().subscribe(
      data => {
        this.note = data;
      },
      error => {
        console.log(error);
      }
    )
  }
  refreshNoteList(){
    this.service.getAllNotes().subscribe(data => {
      this.note = data;
    });
  }
}
