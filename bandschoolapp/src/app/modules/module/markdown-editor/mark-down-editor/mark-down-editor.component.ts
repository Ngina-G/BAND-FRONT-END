import { Component, OnInit } from '@angular/core';
import '@github/markdown-toolbar-element'

@Component({
  selector: 'app-mark-down-editor',
  templateUrl: './mark-down-editor.component.html',
  styleUrls: ['./mark-down-editor.component.css']
})
export class MarkDownEditorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
