import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Emitters } from 'src/app/core/emitters/emitters';
import { ApiService } from 'src/app/core/services/api.service';
import { LiveService } from 'src/app/shared/live.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  show = true;
  note:any=[];
  authenticated = false;

  completed:any;
  error!: any;

  profile:any=[]
  
 
  public errorMessage:string='';
  message=''

  constructor(private service: ApiService,private http:HttpClient,private liveService: LiveService) {
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
    this.refreshNoteList();
    // this.http.get('https://auth-doyo.herokuapp.com/api/user/', {withCredentials: true}).subscribe(
    //     (res: any) => {
    //       this.service.getProfile(res.id).subscribe(
    //         data => {
    //           this.profile = data;
    //         },
    //         error => {
    //           console.log(error);
    //         }
    //       )
    //     },
  
    //   );
  
  }


  ModalTitle!:string;
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

  editClick(item:any){
    this.note=item;
    console.log(item);
  
    this.ModalTitle="Edit Notes";
    this.ActivateAddEditNoteComp=true;
  }

  // update():void{
  //  var val={NoteId:this.NoteId,
  //   title:this.title,
  //   notes:this.notes

  //  }
  
  // console.log(this.note.NoteId);
  
  //   this.service.updateNote(this.note.NoteId,val).subscribe(res=>{
  //   alert(res.toString());
  //   });
  // }

  deleteClick(NoteId:any){
    if(confirm('Are you sure??')){
      this.service.deleteNote(NoteId).subscribe(data=>{
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
  // FilterFn(){
  //   var DepartmentIdFilter = this.idFilter;
  //   var DepartmentNameFilter = this.titleFilter;

  //   this.note = this.NotesWithoutFilter.filter(function (el:any){
  //       return el.DepartmentId.toString().toLowerCase().includes(
  //         DepartmentIdFilter.toString().trim().toLowerCase()
  //       )&&
  //       el.DepartmentName.toString().toLowerCase().includes(
  //         DepartmentNameFilter.toString().trim().toLowerCase()
  //       )
  //   });
  // }

  // sortResult(prop:any,asc:any){
  //   this.note = this.NotesWithoutFilter.sort(function(a:any,b:any){
  //     if(asc){
  //         return (a[prop]>b[prop])?1 : ((a[prop]<b[prop]) ?-1 :0);
  //     }else{
  //       return (b[prop]>a[prop])?1 : ((b[prop]<a[prop]) ?-1 :0);
  //     }
  //   })
  // }


}
