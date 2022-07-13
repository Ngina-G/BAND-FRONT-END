import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
profile:any=[]
user_id:string;
bio:string;
email:string;
image:any;
username:string;
name:string;
ActivateAddEditNoteComp:boolean=false;

  constructor(private http:HttpClient,private service:ApiService) { }

  ngOnInit(): void {
    this.http.get(' https://auth-doyo.herokuapp.com/api/user/', {withCredentials: true}).subscribe(
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
  updateProfile(user_id):void{
    var val = {username:this.username,
      image:this.image,
      bio:this.bio,
    user_id:this.user_id,
  email:this.email,
name:this.name}
   console.log(user_id);
   
    this.service.updateProfile(user_id,val).subscribe(res=>{
    alert(res.toString());
    });
  }
  addClick(){
    this.ActivateAddEditNoteComp=true;
  }
  closeClick(){
    this.ActivateAddEditNoteComp=false;
  }
}
