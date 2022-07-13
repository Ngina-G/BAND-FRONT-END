import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Emitters } from 'src/app/core/emitters/emitters';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-taskbarhomepage',
  templateUrl: './taskbarhomepage.component.html',
  styleUrls: ['./taskbarhomepage.component.css']
})
export class TaskbarhomepageComponent implements OnInit {

  profile:any=[]
  // user_id!:string;
  // bio!:string;
  // email!:string;
  // image!:any;
  // username!:string;
  // name!:string;
  ActivateAddEditNoteComp:boolean=false;
  
    constructor(private http:HttpClient,private service:ApiService) { }
  
    ngOnInit(): void {
      this.http.get('https://auth-doyo.herokuapp.com/api/user/', {withCredentials: true}).subscribe(
        (res: any) => {
          this.service.getProfile(res.id).subscribe(
            data => {
              this.profile = data;
              console.log(this.profile)
              Emitters.authEmitter.emit(true);

            },
            error => {
              console.log(error);
            }
          )
        },
  
      );
  
    }

}
