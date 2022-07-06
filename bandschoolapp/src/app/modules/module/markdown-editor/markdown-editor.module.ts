import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorComponent } from './editor/editor.component';

import { MarkdownEditorOptions } from './mark-down-editor-options';
import { MarkDownEditorComponent } from './mark-down-editor/mark-down-editor.component';
@NgModule({
  declarations: [
    EditorComponent,
    MarkDownEditorComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    EditorComponent
  ]
})
export class MarkdownEditorModule { }
