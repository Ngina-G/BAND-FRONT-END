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
  constructor(private http:HttpClient,private service:ApiService) { }

  ngOnInit(): void {
    this.http.get('http://auth-doyo.herokuapp.com/api/user/', {withCredentials: true}).subscribe(
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
