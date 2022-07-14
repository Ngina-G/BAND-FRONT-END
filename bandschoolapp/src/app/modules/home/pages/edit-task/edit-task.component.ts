import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {

  constructor(private service:ApiService) { }

  @Input() task:any=[];
  TaskId:string;
  tasks:string;
  ngOnInit(): void {
    this.TaskId=this.task.TaskId;
    this.tasks=this.task.tasks;
  }
  updateTask():void{
    var val = {TaskId:this.TaskId,
    tasks:this.tasks,};

    console.log(this.TaskId);
 
   this.service.updateTask(this.TaskId,val).subscribe(res=>{
   alert(res.toString());
   
   });
 }
}
