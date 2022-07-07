import { Component, OnInit, Input, HostBinding } from '@angular/core';
import '@github/markdown-toolbar-element'
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-mark-down-editor',
  templateUrl: './mark-down-editor.component.html',
  styleUrls: ['./mark-down-editor.component.css']
})
export class MarkDownEditorComponent implements OnInit {
  @Input() control!: FormControl;
  @HostBinding('class.focus') isFocus!: boolean;
  focus() {
    this.isFocus = true;
  }
  blur() {
    this.isFocus = false;
  }
  constructor() { }

  ngOnInit(): void {
    this.control = this.control ?? new FormControl();
  }

}
