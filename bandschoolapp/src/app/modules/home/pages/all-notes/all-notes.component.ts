import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-notes',
  templateUrl: './all-notes.component.html',
  styleUrls: ['./all-notes.component.css']
})
export class AllNotesComponent implements OnInit {
  show = false;
  constructor() { }

  ngOnInit(): void {
  }

}
