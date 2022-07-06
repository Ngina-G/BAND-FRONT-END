import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorComponent } from './editor/editor.component';

import { MarkdownEditorOptions } from './mark-down-editor-options';

@NgModule({
  declarations: [
    EditorComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    EditorComponent
  ]
})
export class MarkdownEditorModule { 

    /**
   * A static method to provide configuration to the [MarkdownEditorModule].
   */
     static forRoot(config: MarkdownEditorOptions) {
      return {
        ngModule: MarkdownEditorModule,
        providers: [{provide: MarkdownEditorOptions, useValue: config}]
      };
    }
}

