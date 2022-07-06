import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkDownEditorComponent } from './mark-down-editor.component';

describe('MarkDownEditorComponent', () => {
  let component: MarkDownEditorComponent;
  let fixture: ComponentFixture<MarkDownEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarkDownEditorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarkDownEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
