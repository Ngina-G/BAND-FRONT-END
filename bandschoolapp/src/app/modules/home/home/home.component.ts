import { Component, OnInit } from '@angular/core';
import { LiveService } from 'src/app/live.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title: string = 'BAND';
  show = false;  
  id: any;
  completed:any;
  
  note!: any;
 error!: any;
  
  public errorMessage:string='';



  constructor(private liveService: LiveService) {}

  ngOnInit() {
    this.liveService.getAllNotes().subscribe((data )=> {
      this.note = data;
    }, (error)=> {
      this.errorMessage=error;
      // console.log(error);
    });
  }

}


