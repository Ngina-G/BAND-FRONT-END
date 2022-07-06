import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';


@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent implements OnInit {

  form!: FormGroup;
  constructor(private _fb: FormBuilder) {}

  ngOnInit() {
    this.form = this._fb.group({
      title: ["Hello, I am Trung", Validators.required],
      description: ["This is a markdown text editor for - http://jira.trungk18.com/"]
    });
  }

  get descriptionControl(){
    return this.form.controls.descriptionControl as FormControl
  }

}
