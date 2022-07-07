import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import {Emitters} from '../emitters/emitters';

@Component({
  selector: 'app-angie-api',
  templateUrl: './angie-api.component.html',
  styleUrls: ['./angie-api.component.css']
})
export class AngieApiComponent implements OnInit {

  note:any=[];

  message=''
  constructor(private service: ApiService,private http:HttpClient) {
    this.getNotes(); 
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
  ngOnInit(): void {
    this.http.get('https://auth-doyo.herokuapp.com/api/user/', {withCredentials: true}).subscribe(
      (res: any) => {
        this.message = `Hi ${res.username}`;
        Emitters.authEmitter.emit(true);
      },
      err => {
        this.message = 'You are not logged in';
        Emitters.authEmitter.emit(false);
      }
    );
    this.refreshNoteList();
  }


  ModalTitle:string;
  ActivateAddEditNoteComp:boolean=false;


  idFilter:string="";
  titleFilter:string="";
  notesFilter:string="";
  NotesWithoutFilter:any=[];


  addClick(){
    this.note={
      NoteId:0,
      title:"",
      notes:"",
    }
    this.ModalTitle="Add Note";
    this.ActivateAddEditNoteComp=true;

  }

  editClick(item){
    this.note=item;
    this.ModalTitle="Edit Notes";
    this.ActivateAddEditNoteComp=true;
  }

  deleteClick(item){
    if(confirm('Are you sure??')){
      this.service.deleteNote(item.NoteId).subscribe(data=>{
        alert(data.toString());
        this.refreshNoteList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditNoteComp=false;
    this.refreshNoteList();
  }


  refreshNoteList(){
    this.service.getAllNotes().subscribe(data => {
      this.note = data;
    });
  }
  FilterFn(){
    var DepartmentIdFilter = this.idFilter;
    var DepartmentNameFilter = this.titleFilter;

    this.note = this.NotesWithoutFilter.filter(function (el){
        return el.DepartmentId.toString().toLowerCase().includes(
          DepartmentIdFilter.toString().trim().toLowerCase()
        )&&
        el.DepartmentName.toString().toLowerCase().includes(
          DepartmentNameFilter.toString().trim().toLowerCase()
        )
    });
  }

  sortResult(prop,asc){
    this.note = this.NotesWithoutFilter.sort(function(a,b){
      if(asc){
          return (a[prop]>b[prop])?1 : ((a[prop]<b[prop]) ?-1 :0);
      }else{
        return (b[prop]>a[prop])?1 : ((b[prop]<a[prop]) ?-1 :0);
      }
    })
  }
}
