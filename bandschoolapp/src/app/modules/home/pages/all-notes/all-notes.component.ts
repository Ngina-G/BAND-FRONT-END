import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Emitters } from 'src/app/core/emitters/emitters';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-all-notes',
  templateUrl: './all-notes.component.html',
  styleUrls: ['./all-notes.component.css']
})
export class AllNotesComponent implements OnInit {
  constructor(private service:ApiService,private http:HttpClient) { this.getNotes()}
note:any=[]
ActivateAddEditNoteComp:boolean=false;
message=''
  ngOnInit(): void {
    this.refreshNoteList();
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
  deleteClick(NoteId:any){
    if(confirm('Are you sure??')){
      this.service.deleteNote(NoteId).subscribe(data=>{
        alert(data.toString());
        this.refreshNoteList();
      })
    }
  }
  editClick(item:any){
    this.note=item;
    console.log(item);
    this.ActivateAddEditNoteComp=true;
  }
  closeClick(){
    this.ActivateAddEditNoteComp=false;
    this.refreshNoteList();
  }
}
