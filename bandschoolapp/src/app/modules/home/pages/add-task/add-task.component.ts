import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Emitters } from 'src/app/core/emitters/emitters';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
message=''
authenticated=false
  constructor(private service:ApiService, private router:Router,private http:HttpClient) { this.getTasks()}
  show = false;
  ngOnInit(): void {this.refreshTaskList();
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
      })

  }
  ActivateAddEditNoteComp:boolean=false;
  task:any=[]
  TaskId:string;
  tasks:string;
  addTask(){
    var val = {TaskId:this.TaskId,
                tasks:this.tasks,};
    this.service.addTask(val).subscribe(res=>{
      alert(res.toString());
      location.reload();
    });
  }
  getTasks =  () => {
    this.service.getAllTasks().subscribe(
      data => {
        this.task = data;
      },
      error => {
        console.log(error);
      }
    )
  }
  refreshTaskList(){
    this.service.getAllTasks().subscribe(
      data => {
        this.task = data;
      })
  }
  deleteClick(TaskId:any){
    if(confirm('Are you sure??')){
      this.service.deleteTask(TaskId).subscribe(data=>{
        alert(data.toString());
        this.refreshTaskList();
      })
    }
  }
  
  editClick(item:any){
    this.task=item;
    console.log(item);
    this.ActivateAddEditNoteComp=true;
  }
   closeClick(){
    this.ActivateAddEditNoteComp=false;
    this.refreshTaskList();
  }
}