import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-taskbarhomepage',
  templateUrl: './taskbarhomepage.component.html',
  styleUrls: ['./taskbarhomepage.component.css']
})
export class TaskbarhomepageComponent implements OnInit {

  profile:any=[]
  user_id!:string;
  bio!:string;
  email!:string;
  image!:any;
  username!:string;
  name!:string;
  ActivateAddEditNoteComp:boolean=false;
  
    constructor(private http:HttpClient,private service:ApiService) { }
  
    ngOnInit(): void {
      this.http.get('http://127.0.0.1:8000/api/user/', {withCredentials: true}).subscribe(
        (res: any) => {
          this.service.getProfile(res.id).subscribe(
            data => {
              this.profile = data;
            },
            error => {
              console.log(error);
            }
          )
        },
  
      );
  
    }

}
